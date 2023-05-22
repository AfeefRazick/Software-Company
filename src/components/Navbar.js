import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHotjar, FaTimes } from "react-icons/fa";
import "../App.css";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const closeMobileMenu = () => {
    setShow(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            AFEEF <FaHotjar className="" />
          </Link>
          {!show && <FaBars size="1.5em" onClick={handleClick} />}
          {show && <FaTimes size="1.5em" color="red" onClick={handleClick} />}
        </div>
        <ul className={show ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
