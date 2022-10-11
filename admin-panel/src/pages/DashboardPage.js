import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard";

const DashboardPage = () => {
  return (
    <Sidebar>
      <Dashboard />
    </Sidebar>
  );
};

export default DashboardPage;
