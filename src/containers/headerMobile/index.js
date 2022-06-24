import logo from "assets/images/logo.png";
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routes from "routes/routes";
import {
  loginModalVisible,
  registrationModalVisible,
  setUserParams,
} from "store/action-creators/app";
import { userParamsSelector } from "store/selectors/app";

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

  const handleLogout = () => {
    dispatch(setUserParams({ auth: false }));
  };

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
              <li>
                <Link className="menu-item" to={routes.CREATE_TASK}>
                  Создать задание
                </Link>
                <Link className="menu-item" to={routes.FIND_TASK}>
                  Найти задание
                </Link>
                <Link className="menu-item" to={routes.PERFORMERS}>
                  Исполнители
                </Link>
                <Link className="menu-item" to={routes.MY_ORDERS}>
                  Мои заказы
                </Link>
                <Link className="menu-item" to={routes.MY_PROFILE}>
                  Профиль
                </Link>
                <p className="menu-item">Тарифы</p>
                <p className="menu-item">Настройки</p>
                <p onClick={handleLogout} className="menu-item">
                  Выйти
                </p>
              </li>
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
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}
