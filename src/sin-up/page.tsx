import React from "react";
import { pages } from "../common/constant";

const SignUp: React.FC = () => {
  return (
    <h1 className="flex justify-center font-bold text-2xl">
      {pages.signUpRoute}
    </h1>
  );
};

export default SignUp;
