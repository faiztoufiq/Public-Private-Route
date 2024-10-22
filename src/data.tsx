import React, { useState, createContext, ReactNode } from "react";
import HomePage from "./home/page";
import Login from "./login/page";
import Dashboard from "./dashboard/page";
import About from "./about/page";
import Settings from "./settings/page";
import NotFound from "./not-found/page";
import ForgetPassword from "./forget-password/page";
import SignUp from "./sin-up/page";
import { routes } from "./common/path";


interface LoginContextProvider {
  loggedin: boolean;
  toggleLogin: () => void;
  handleLogout: () => void;
  routesConfiguration: Route[];
}
interface Route {
  path: string;
  element: ReactNode;
  private: boolean;
}
export const loginCotext = createContext<LoginContextProvider | undefined>(
  undefined
);

interface loginChildren {
  children: ReactNode;
}

export const LoginProvider: React.FC<loginChildren> = ({ children }) => {
  const [loggedin, setLoggedin] = useState(() => {
    const storedLoginState = localStorage.getItem("loggedin");
    return storedLoginState === "true";
  });

  const toggleLogin = () => {
    setLoggedin((prev) => {
      const newState = !prev;
      localStorage.setItem("loggedin", newState.toString());
      return newState;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    setLoggedin(false);
  };
  const routesConfiguration: Route[] = [
    {
      path: routes.home,
      element: (
        <HomePage
          loggedin={loggedin}
          toggleLogin={toggleLogin}
          handleLogout={handleLogout}
        />
      ),
      private: true,
    },
    { path: routes.dashboard, element: <Dashboard />, private: true },
    { path: routes.about, element: <About />, private: true },
    { path: routes.settings, element: <Settings />, private: true },
    {
      path: routes.localHost,
      element: <Login onLogin={toggleLogin} />,
      private: false,
    },
    { path: routes.signUp, element: <SignUp />, private: false },
    {
      path: routes.forgetPassword,
      element: <ForgetPassword />,
      private: false,
    },
    { path: routes.allPth, element: <NotFound />, private: false },
  ];

  return (
    <loginCotext.Provider
      value={{ loggedin, toggleLogin, handleLogout, routesConfiguration }}
    >
      {children}
    </loginCotext.Provider>
  );
};
