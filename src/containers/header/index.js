import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <div className="header">
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div></div>
        <div></div>
      </header>
    </div>
  );
}
