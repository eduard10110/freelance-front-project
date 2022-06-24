import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { userParamsSelector } from "store/selectors/app";
import { IoLogInOutline } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import routes from "routes/routes";
import logo from "assets/images/logo.png";
import {
  loginModalVisible,
  registrationModalVisible,
} from "store/action-creators/app";

export default function HeaderMobile() {
  const [menuOpened, setMenuOpened] = useState(false);
  const { auth } = useSelector(userParamsSelector, shallowEqual);
  const dispatch = useDispatch();

  const handleAuthModal = (type) => () => {
    handleCheckboxChange();
    type === "login"
      ? dispatch(loginModalVisible(true))
      : dispatch(registrationModalVisible(true));
  };

  const handleCheckboxChange = () => setMenuOpened(!menuOpened);

  return (
    <div className="header-mobile">
      <div>
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

          <ul className="menu__box">
            {auth ? (
              <li></li>
            ) : (
              <li>
                <Link className="menu-item" to={routes.CREATE_TASK}>
                  Создать задание
                </Link>
                <Link className="menu-item" to={routes.FIND_TASK}>
                  Найти задание
                </Link>
                <p className="menu-item" onClick={handleAuthModal("login")}>
                  Войти
                </p>
                <p className="menu-item" onClick={handleAuthModal()}>
                  Зарегистрироваться
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}
