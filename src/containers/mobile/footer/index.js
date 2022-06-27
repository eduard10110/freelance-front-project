import { FOOTER_DATA } from "helpers/constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FooterMobile() {
  const [categoryOpened, setCategoryOpened] = useState(null);

  const handleOpenRadioItem = (id) => () =>
    setCategoryOpened(categoryOpened === id ? null : id);

  const handleDownloadFromAppStore = () => alert("download from App store");

  const handleDownloadFromGooglePlay = () => alert("download from Google play");

  const handleDownloadFromHuaweiStore = () =>
    alert("download from Huawei store");

  console.log(categoryOpened);
  return (
    <footer className="page-wrapper">
      <div className="page">
        <div className="content-wrapper-mobile footer-container-wrapper-mobile">
          {FOOTER_DATA.map(({ id, categories, title }) => {
            return (
              <div
                className={`fm-radio-item ${
                  categoryOpened === id ? "active" : ""
                }`}
                key={id}
              >
                <div className="radio-item-header">
                  <div
                    onClick={handleOpenRadioItem(id)}
                    className={`radioButton ${
                      categoryOpened === id
                        ? "radioButton-opened"
                        : "radioButton-closed"
                    }`}
                  ></div>
                  <h5>{title}</h5>
                </div>

                {categoryOpened === id && (
                  <div className="fm-subcategories-wrapper">
                    {categories.map((elem) => (
                      <p className="body4 " key={elem.title}>
                        <Link
                          className="footer-subcategory-item body4"
                          to={elem.path}
                        >
                          {elem.title}
                        </Link>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="fm-download-from-container-wrapper body4">
            <div
              role="button"
              onClick={handleDownloadFromAppStore}
              className="fm-from-app-store shop-logo"
            ></div>
            <div
              role="button"
              onClick={handleDownloadFromGooglePlay}
              className="fm-from-google-play shop-logo"
            ></div>
          </div>
          <div className="fm-download-from-container-wrapper2">
            <div
              role="button"
              onClick={handleDownloadFromHuaweiStore}
              className="from-huawei-store shop-logo"
            ></div>
          </div>
          <p className="body3 signature-wrapper">© 2022 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
