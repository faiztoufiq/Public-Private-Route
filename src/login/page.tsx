import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { pages } from "../common/constant";
import { routes } from "../common/path";
interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate(routes.home);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">{pages.loginPage}</h1>
      <button
        onClick={handleLogin}
        className="px-1 py-1 w-32 h-10  bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 mb-4"
      >
        {pages.logIn}
      </button>
      <Link to={routes.signUp}>
        <button className="px-1 py-1 w-32 h-10  bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
          {pages.signUp}
        </button>
      </Link>
      <div className="mt-5">
        <Link to={routes.forgetPassword}>
          <button className="px-2 py-1 w-32 h-10  bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
            {pages.forgetPass}
          </button>
        </Link>
      </div>
      <p></p>
    </div>
  );
};

export default Login;
