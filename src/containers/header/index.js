import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { authNavLinks, navLinks } from "../../helpers/enums/navEnums";
import {useDispatch} from 'react-redux';
import {loginModalVisible, registrationModalVisible} from "../../store/action-creators/app";

export default function Header() {
  const dispatch = useDispatch();
    const [auth, setAuth] = useState(true);


    const handleAuthModal = (type) => () => {
      type === 'login' ? dispatch(loginModalVisible(true)) : dispatch(registrationModalVisible(true))
    }

    return (
        <div className="header">
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                  {/* <span className="exit">
                    <i></i>
                    <Link to="/" className="body3">
                      Выйти
                    </Link>
                  </span> */}
                </div>
                <div className="nav">
                    {auth
                        ? authNavLinks.map((link) => (
                              <NavLink
                                  to={link.path}
                                  className="nav-link body3"
                                  activeClassName="active"
                                  key={link.label}
                              >
                                  {link.label}
                              </NavLink>
                          ))
                        : navLinks.map((link) => (
                              <NavLink
                                  to={link.path}
                                  className="nav-link body3"
                                  activeClassName="active"
                                  key={link.label}
                              >
                                  {link.label}
                              </NavLink>
                          ))}
                </div>
                {auth ? (
                    <div className="auth">
                        <p className="body5" onClick={handleAuthModal('login')}>
                            Войти
                        </p>
                        <span>или</span>
                        <p className="body5"  onClick={handleAuthModal('registration')}>
                            Зарегистрироваться
                        </p>
                    </div>
                ) : (
                    <div className="auth-user-actions">
                        <div className="notifications">
                            <span className="message-icon">
                                <i></i>
                            </span>
                            <span className="notification-icon">
                                <i></i>
                            </span>
                        </div>
                        <div className="header-personal-info">
                            <div className="header-user-currency body6">
                                <span>0</span>
                                <span>&#8381;</span>
                                <div className="header-currency-dropdown">
                                    <p className="body3">
                                        На какую сумму хотите пополнить кошелёк?
                                    </p>
                                    <span className="body">
                                        * — Порядок выплаты, ограничения и
                                        полные условия определены в оферте.
                                    </span>
                                    <input
                                        className="currency-input"
                                        placeholder="1000"
                                    />
                                    <button className="btn btn-purple-filled">Пополнить</button>
                                </div>
                            </div>
                            <div className="header-user-profile">
                                <span>
                                    <i></i>
                                </span>
                                <div className="profile-dropdown">
                                    <Link to="/" className="body3">
                                        Профиль
                                    </Link>
                                    <Link to="/" className="body3">
                                        Тарифы
                                    </Link>
                                    <span className="settings">
                                        <i></i>
                                        <Link to="/" className="body3">
                                            Настройки
                                        </Link>
                                    </span>
                                    <span className="exit">
                                        <i></i>
                                        <Link to="/" className="body3">
                                            Выйти
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}
