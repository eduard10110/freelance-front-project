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
            className="from-app-store shop-logo"
          ></div>
          <div
            role="button"
            onClick={handleDownloadFromGooglePlay}
            className="from-google-play shop-logo"
          ></div>
          <div
            role="button"
            onClick={handleDownloadFromHuaweiStore}
            className="from-huawei-store shop-logo"
          ></div>
        </div>
        <div className="for-workers-container-wrapper">
          <p className="body2">Для работодателей</p>
          <p className="body3">Создать задание</p>
        </div>
        <div className="for-workers-container-wrapper">
          <p className="body2">Для исполнителей</p>
          <p className="body3">Найти задание</p>
        </div>
        <div className="for-workers-container-wrapper">
          <p className="body2">Помощь</p>
          <p className="body3">Контакты</p>
          <p className="body3">Служба поддержки</p>
          <p className="body3">Частые вопросы</p>
          <p className="body3">Как работает Сервис</p>
          <p className="body2 mt-2">Подписывайся</p>
          {/* <div className="telegram-logo mt-2"></div> */}
        </div>
      </div>
      <div className="footer-bottom footer-subCategories-wrapper">
        <p className="body3">© 2022 All Rights Reserved</p>

        <div className="bottom-logo">
          <div className="mir-access-logo"></div>
          <div className="visa-verification-logo"></div>
          <div className="mastercard-id-check-logo"></div>
        </div>
        <div className="telegram-logo-wrapper">
          <div className="telegram-logo"></div>
        </div>
      </div>
    </footer>
  );
}
