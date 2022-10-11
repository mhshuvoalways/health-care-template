import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import InfluencersPage from "../pages/InfluencersPage";
import InfluencerAudiencesPage from "../pages/InfluencerAudiencesPage";
import InfluencerCampaignsPage from "../pages/InfluencerCampaignsPage";
import CampaignsPage from "../pages/CampaignsPage";
import ClientsPage from "../pages/ClientsPage";
import ClientDetails from "../pages/ClientDetails";
import ListInvitedInfluencerPage from "../pages/ListInvitedInfluencerPage";
import DiseasePage from "../pages/DiseasePage";
import SingleCampaingPage from "../pages/SingleCampaingPage";
import AccountPage from "../pages/AccountPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/influencers" element={<InfluencersPage />} />
        <Route
          path="/influenceraudiences"
          element={<InfluencerAudiencesPage />}
        />
        <Route
          path="/influencercampaigns"
          element={<InfluencerCampaignsPage />}
        />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clientdetails" element={<ClientDetails />} />
        <Route
          path="/listinvitedinfluencers"
          element={<ListInvitedInfluencerPage />}
        />
        <Route path="/disease" element={<DiseasePage />} />
        <Route path="/singlecampaign" element={<SingleCampaingPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/changepassword" element={<ChangePasswordPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
