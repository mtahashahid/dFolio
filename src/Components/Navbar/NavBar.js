import React, { useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav>
      <label className="name">Muhammad Taha</label>
      <ul className={navbarOpen ? "nav-links active" : "nav-links"}>
        <li className="nav-li">
          <a href="!#">Home</a>
        </li>
        <li className="nav-li">
          <a href="!#">Skills</a>
        </li>
        <li className="nav-li">
          <a href="!#">Projects</a>
        </li>
        <li className="nav-li">
          <a href="!#">Contact</a>
        </li>
      </ul>
      <label className="icon">
        <i
          className={navbarOpen ? "fa fa-times" : "fa fa-bars"}
          aria-hidden="true"
          onClick={handleToggle}
        ></i>
      </label>
    </nav>
  );
};
export default NavBar;
