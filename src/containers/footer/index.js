import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";

export default function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = () => navigate(routes.HOME);

  const handleDownloadFromAppStore = () => alert("download from App store");

  const handleDownloadFromGooglePlay = () => alert("download from Google play");

  const handleDownloadFromHuaweiStore = () =>
    alert("download from Huawei store");

  return (
    <footer className="footer-container-wrapper">
      <div className="footer-subCategories-wrapper">
        <div className="subCategories-item">
          <div
            onClick={handleLogoClick}
            role="button"
            className="logo-btn"
          ></div>
          <div
            role="button"
            onClick={handleDownloadFromAppStore}
            className="from-app-store"
          ></div>
          <div
            role="button"
            onClick={handleDownloadFromGooglePlay}
            className="from-google-play"
          ></div>
          <div
            role="button"
            onClick={handleDownloadFromHuaweiStore}
            className="from-huawei-store"
          ></div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </footer>
  );
}
