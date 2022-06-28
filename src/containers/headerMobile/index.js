import logo from "assets/images/logo.png";
import HeaderMobileMenu from "components/headerMobileMenu";
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  chatModalVisible,
  notificationsModalVisible,
} from "store/action-creators/app";
import { userParamsSelector } from "store/selectors/app";

export default function HeaderMobile() {
  const { auth } = useSelector(userParamsSelector, shallowEqual);
  const [menuOpened, setMenuOpened] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => setMenuOpened(!menuOpened);

  const handleOpenNotificationsModal = () =>
    dispatch(notificationsModalVisible(true));

  const handleChatModalVisible = () => {
    dispatch(chatModalVisible(true));
  };

  return (
    <div className="header-mobile">
      <div className="hamburger-menu">
        <input
          checked={menuOpened}
          onClick={handleCheckboxChange}
          id="menu__toggle"
          type="checkbox"
        />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <HeaderMobileMenu handleCheckboxChange={handleCheckboxChange} />
      </div>

      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {auth && (
        <div className="hm-icons-wrapper">
          <span
            className="message-icon"
            onClick={handleChatModalVisible}
            role="presentation"
          >
            <i></i>
          </span>
          <span
            onClick={handleOpenNotificationsModal}
            role="button"
            className="notification-icon"
          >
            <i></i>
          </span>
        </div>
      )}
    </div>
  );
}
