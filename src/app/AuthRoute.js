import { Route } from "react-router-dom";
import { useAuth as TAMAuth } from "./features/registration/authService";

const AuthRoute = ({ component: Component, ...rest }) => {
  const auth = TAMAuth();

  return <Route {...rest} render={(props) => (auth.isAuthenticated ? <Component {...props} /> : null)} />;
};

export default AuthRoute;