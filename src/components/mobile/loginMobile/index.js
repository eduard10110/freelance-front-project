import ModalComponent from "components/modal";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  loginModalVisible,
  registrationModalVisible,
  setUserParams,
} from "store/action-creators/app";
import { showLoginModalSelector } from "store/selectors/app";

export default function LoginMobile() {
  const modalVisible = useSelector(showLoginModalSelector, shallowEqual);
  const dispatch = useDispatch();

  const handleCloseModalVisible = () => {
    dispatch(loginModalVisible(false));
  };

  const handleOpenRegistrationModal = () => {
    dispatch(loginModalVisible(false));
    dispatch(registrationModalVisible(true));
  };

  const handleLogin = () => {
    dispatch(setUserParams({ auth: true }));
    dispatch(loginModalVisible(false));
  };

  const customStyles = {
    content: {
      width: "100%",
      height: "531px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "16px",
      background:
        "linear-gradient(109.46deg, rgba(255, 255, 255, 0.77) 1.57%, rgba(255, 255, 255, 0.8) 100%)",
      boxShadow:
        "111px 125px 67px rgba(0, 0, 0, 0.01), 63px 70px 57px rgba(0, 0, 0, 0.05), 28px 31px 42px rgba(0, 0, 0, 0.09), 7px 8px 23px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(18.4988px)",
    },
  };
  return (
    <ModalComponent
      isOpen={modalVisible}
      customStyles={customStyles}
      onRequestClose={handleCloseModalVisible}
    >
      <div className="mobile-login-modal">
        <div className="login-title">
          <h4>Авторизация</h4>
          <span onClick={handleCloseModalVisible} role="presentation">
            <i></i>
          </span>
        </div>
        <div className="login-type">
          <p className="body5">Вход</p>
          <p className="body5" onClick={handleOpenRegistrationModal}>
            Регистрация
          </p>
        </div>
        <div className="login-inputs">
          <label htmlFor="label">
            <p>Email</p>
            <input
              type="text"
              className="input body3"
              placeholder="example@gmail.com"
              id="email"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              className="input body3"
              placeholder="***************"
              id="password"
            />
          </label>
        </div>
        <div className="login-remember">
          <label htmlFor="remember">
            <label className="reg-checkbox-container">
              <input type="checkbox" id="remember" />
              <span className="reg-checkmark"></span>
            </label>
            <p>Запомнить меня</p>
          </label>
          <p>Забыли пароль?</p>
        </div>
        <div className="login-actions">
          <button
            className="btn btn-purple btn-login body3"
            onClick={handleLogin}
          >
            Войти
          </button>
          <p className="body3">или</p>
          <button className="btn btn-default btn-google body3">
            <i></i>Войти с помощью Google
          </button>
        </div>
      </div>
    </ModalComponent>
  );
}
