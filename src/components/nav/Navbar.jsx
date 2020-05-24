import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
const Navbar = (props) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [mobNav, setMobNav] = useState("");

  const onClickHandler = () => {
    setActiveMenu((prev) => (prev === "" ? "is-active" : ""));
    setMobNav((prev) => (prev === "" ? "mobile-nav" : ""));
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          className="img-fluid"
          src={`${process.env.PUBLIC_URL}/images/logo-2144403.svg`}
          alt="logo"
        />
      </div>

      <div
        onClick={onClickHandler}
        className={"menu-toggle " + activeMenu}
        id="mobile-menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={"nav " + mobNav}>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signin">Sign In</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
