import BalanceModal from "components/balanceModal";
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

export default function HeaderMobileMenu({ handleCheckboxChange }) {
  const { auth } = useSelector(userParamsSelector, shallowEqual);
  const [balanceModalVisible, setBalanceModalVisible] = useState(false);

  const dispatch = useDispatch();

  const handleAuthModal = (type) => () => {
    handleCheckboxChange();
    type === "login"
      ? dispatch(loginModalVisible(true))
      : dispatch(registrationModalVisible(true));
  };

  const handleLogout = () => {
    dispatch(setUserParams({ auth: false }));
  };

  const handleBalanceModalChange = (payload) => () =>
    setBalanceModalVisible(payload);

  return (
    <>
      <BalanceModal
        visible={balanceModalVisible}
        handleClose={handleBalanceModalChange}
      />
      <ul className="menu__box">
        {auth ? (
          <li>
            <div className="hm-balance-container">
              <p className="menu-item">
                0<span>&#8381;</span>
              </p>
              <button
                onClick={handleBalanceModalChange(true)}
                className="btn btn-purple-filled"
              >
                Пополнить
              </button>
            </div>
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
    </>
  );
}
