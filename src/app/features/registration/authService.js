import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { refreshToken as refreshTokenAPI } from "app/shared/services/auth";
const AuthContext = createContext();

async function fetchRefreshedToken() {
  return new Promise((success, fail) => {
    if (!JSON.parse(localStorage.getItem("token")).refreshToken) {
      fail("No refresh token exist");
    }
    refreshTokenAPI({
      token: {
        refreshToken: JSON.parse(localStorage.getItem("token")).refreshToken,
      },
    })
      .then(() => {
        success(true);
      })
      .catch((msg) => {
        fail(msg);
      });
  });
}

const refreshToken = async (fetchMessage) => {
  try {
    let tokenExpiry = JSON.parse(localStorage.getItem("token")).expiresIn;
    let currentDate = new Date().toISOString();
    if (tokenExpiry > currentDate) {
      const refresh = await fetchRefreshedToken();
      refresh
        .then((response) => {
          console.log("response", response);

          return response;
        })
        .catch((error) => {
          fetchMessage(error);
          console.log(error);
          return false;
        });
    }
  } catch (e) {
    console.log(e);
  }
};
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchMessage = useCallback(({ msg }) => {
    return setErrorMessage(msg);
  }, []);
  useEffect(() => {
    const authenticate = () => {
      localStorage.getItem("token") == null || localStorage.getItem("user") == null
        ? setIsAuthenticated(false)
        : refreshToken(fetchMessage)
          ? setIsAuthenticated(true)
          : setIsAuthenticated(false);
    };
    (async () => {
      await authenticate();
    })();
  }, [fetchMessage]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, errorMessage }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
