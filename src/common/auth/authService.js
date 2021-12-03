// Authentication service handling keycloak (Red Hat SSO) integration, authentication state management,
// token refresh, and the axios authorization header. Exports a provider and a custom hook used by
// other common code. The application never needs to use this service as authentication is handled in
// the background, allowing the application to assume the current user is authenticated (though not
// necessarily authorized, which the application checks using the users service).

import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Keycloak from "keycloak-js";

const AuthContext = createContext();

const setAuthorizationHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const TokenRefreshTimer = () => {
  const { keycloak } = useContext(AuthContext);
  const interval = useRef(null);

  // Every 60 seconds request a token refresh if the token is within 70 seconds of expiring
  const TIMER_INTERVAL_MSEC = 60000;
  const TOKEN_MIN_VALIDITY_SEC = 70;

  useEffect(() => {
    interval.current = setInterval(() => {
      keycloak
        .updateToken(TOKEN_MIN_VALIDITY_SEC)
        .then((refreshed) => {
          if (refreshed) {
            // Token was successfully refreshed

            setAuthorizationHeader(keycloak.token);
          } else {
            // Token is still valid
          }
        })
        .catch(() => {
          // Failed to refresh the token, or the session has expired

          // Clear the authentication state which triggers SSO authentication
          keycloak.clearToken();
        });
    }, TIMER_INTERVAL_MSEC);

    return () => clearInterval(interval.current);
  }, [keycloak]);

  return null;
};

const getKeycloakClientId = () => {
  // Return client ID base unmodified if dev-local-react-webapp
  if (
    process.env.REACT_APP_KEYCLOAK_CLIENT_ID_BASE === "dev-local-nodejs-webapp"
  ) {
    return process.env.REACT_APP_KEYCLOAK_CLIENT_ID_BASE;
  }

  // Return client ID base with deployment environment or local appended
  return `${process.env.REACT_APP_KEYCLOAK_CLIENT_ID_BASE}-${
    process.env.NODE_ENV === "production" &&
    process.env.REACT_APP_CLOUD_PRODUCTION_BUILD === "true"
      ? window.DEPLOY_ENV
      : "local"
  }`;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keycloak] = useState(
    new Keycloak({
      realm: "med-su",
      url: "https://idp-proxy.med.stanford.edu/auth/",
      clientId: getKeycloakClientId(),
    })
  );

  useEffect(() => {
    const authenticate = () => {
      return keycloak
        .init({
          onLoad: "login-required",
          promiseType: "native",
        })
        .then((authenticated) => {
          console.log(authenticated);
          // Either authenticated or not authenticated
        })
        .catch((error) => {
          console.log(error.response);
          // Failed to initialize
        });
    };

    (async () => {
      await authenticate();
      setAuthorizationHeader(keycloak.token);
      setIsAuthenticated(keycloak.authenticated);
    })();
  }, [keycloak]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, keycloak }}>
      <TokenRefreshTimer />
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
