import React from "react";
import { pages } from "../common/constant";

const DashboardPage: React.FC = () => {
  return (
    <h1 className="flex justify-center font-bold text-2xl">
      {pages.dashboardRoute}
    </h1>
  );
};

export default DashboardPage;
