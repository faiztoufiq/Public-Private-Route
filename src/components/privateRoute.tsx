import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../common/path";

interface PrivateRouteProps {
  loggedin: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ loggedin }) => {
  return loggedin ? <Outlet /> : <Navigate to={routes.localHost} />;
};

export default PrivateRoute;
