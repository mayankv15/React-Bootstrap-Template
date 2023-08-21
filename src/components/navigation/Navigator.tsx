import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Home from "../../screen/Home";
import Profile from "../../screen/Profile";
import Settings from "../../screen/Settings";
import Company from "../../screen/Company";
import TermsOfUse from "../../screen/TermsOfUse";
import PrivacyPolicy from "../../screen/PrivacyPolicy";
import CookiePolicy from "../../screen/CookiePolicy";
import LoginPage from "../../Pages/LoginPage";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<LoginPage />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/company" element={<Company />} />
      <Route path="/termsofuse" element={<TermsOfUse />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/cookiepolicy" element={<CookiePolicy />} />
    </Routes>
  );
};

export default Navigator;
