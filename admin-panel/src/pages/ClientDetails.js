import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ClientDetails from "../components/clients/clients/ClientDetails";

const DashboardPage = () => {
  return (
    <Sidebar>
      <ClientDetails />
    </Sidebar>
  );
};

export default DashboardPage;
