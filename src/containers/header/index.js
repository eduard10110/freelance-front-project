import React from 'react';
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <div className='header'>
        <header>
            <div className='logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div></div>
            <div></div>
        </header>
    </div>
  )
}
