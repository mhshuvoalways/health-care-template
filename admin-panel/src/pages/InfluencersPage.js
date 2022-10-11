import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Influencers from "../components/influencers/influencer";

const DashboardPage = () => {
  return (
    <Sidebar>
      <Influencers />
    </Sidebar>
  );
};

export default DashboardPage;
