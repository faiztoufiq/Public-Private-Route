import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { pages } from "../common/constant";

interface HomePageProps {
  loggedin: boolean;
  toggleLogin: () => void;
  handleLogout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  handleLogout,
}) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">{pages.homeTitle}</h1>
      <nav className="flex flex-col space-y-4">
        <>
          <button
            onClick={handleLogoutClick}
            className="px-4 py-2 bg-red-500 w-40 h-10 text-white rounded hover:bg-red-600 transition duration-300"
          >
            {pages.logOut}
          </button>
          <Link to="/dashboard">
            <button className="px-4 py-2 w-40 h-10 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
              {pages.goDashboard}
            </button>
          </Link>
          <Link to="/about">
            <button className="px-4 py-2 w-40 h-10 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
              {pages.goAbout}
            </button>
          </Link>
          <Link to="/settings">
            <button className="px-4 py-2 w-40 h-10 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
              {pages.goSettings}
            </button>
          </Link>
        </>
      </nav>
    </div>
  );
};

export default HomePage;
