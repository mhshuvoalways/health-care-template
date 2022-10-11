import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Campaigns from "../components/campaigns";

const DashboardPage = () => {
  return (
    <Sidebar>
      <Campaigns />
    </Sidebar>
  );
};

export default DashboardPage;
