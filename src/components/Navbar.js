import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHotjar, FaTimes } from "react-icons/fa";
import "../App.css";
import "./Navbar.css";
import "./Button.css";
import mainLinks from "../LinkNames";
import Button from "./Button.js";

function Navbar() {
  const [show, setShow] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  const closeMobileMenu = () => {
    setShow(false);
  };
  const showButton = function () {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Bogus Corp <FaHotjar className="fa-typo3" />
          </Link>

          {!show && (
            <FaBars className="menu-icon fa-bars" onClick={handleClick} />
          )}
          {show && (
            <FaTimes className="menu-icon" color="red" onClick={handleClick} />
          )}
          <ul className={show ? "nav-menu active" : "nav-menu"}>
            {mainLinks.map((mainlink) => {
              return (
                <li key={mainlink.id} className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    {mainlink.text}
                  </Link>
                </li>
              );
            })}

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
