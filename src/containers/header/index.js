import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { authNavLinks, navLinks } from "../../helpers/enums/navEnums";

export default function Header() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="header">
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav">
          {auth
            ? authNavLinks.map((link) => (
                <NavLink
                  to={link.path}
                  className="nav-link body3 btn btn-default"
                  activeClassName="active"
                  key={link.label}
                >
                  {link.label}
                </NavLink>
              ))
            : navLinks.map((link) => (
                <NavLink
                  to={link.path}
                  className="nav-link body3 btn btn-default"
                  activeClassName="active"
                  key={link.label}
                >
                  {link.label}
                </NavLink>
              ))}
        </div>
        <div className="auth">
          <Link to="/" className="body3 btn btn-default btn-td-underline">
            Войти
          </Link>
          <span>или</span>
          <Link to="/" className="body3 btn btn-default btn-td-underline">
            Зарегистрироваться
          </Link>
        </div>
      </header>
    </div>
  );
}
