import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p>
      <a href="#home">Home </a>
    </p>
    <p>
      <a href="#home">What is GPT3? </a>
    </p>
    <p>
      <a href="#home">Open AI</a>
    </p>
    <p>
      <a href="#home">Case Studies </a>
    </p>
    <p>
      <a href="#home">Library </a>
    </p>
  </>
);

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="the__navbar">
      <div className="the__navbar-links">
        <div className="the__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="the__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="the__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="the__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="the__navbar-menu_container scale-up-center">
            <div className="the__navbar-menu_container-links">
              <Menu />
              <div className="the__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
