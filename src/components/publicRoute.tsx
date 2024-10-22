import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../common/path";

interface PublicRouteProps {
  loggedin: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ loggedin }) => {
  return !loggedin ? <Outlet /> : <Navigate to={routes.home} />;
};

export default PublicRoute;
