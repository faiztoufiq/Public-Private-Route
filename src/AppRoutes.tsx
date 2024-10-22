import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { loginCotext } from "./data";
import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";

const AppRoutes: React.FC = () => {
  const context = useContext(loginCotext);

  if (!context) {
    throw new Error("Login context is not available");
  }

  const { loggedin, routesConfiguration } = context;

  return (
    <Routes>
    {routesConfiguration.map(
      ({
        path,
        element,
        private: isPrivate,
      }: {
        path: string;
        element: React.ReactNode;
        private: boolean;
      }) =>
        isPrivate ? (
          <Route key={path} element={<PrivateRoute loggedin={loggedin} />}>
            <Route path={path} element={element} />
          </Route>
        ) : (
          <Route key={path} element={<PublicRoute loggedin={loggedin} />}>
            <Route path={path} element={element} />
          </Route>
        )
    )}
  </Routes>
  );
};

export default AppRoutes;