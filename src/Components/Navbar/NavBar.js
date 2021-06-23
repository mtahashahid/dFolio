import React, { useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [navbarOpen,setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  };
  return (
    <nav>
      <label className="name">Muhammad Taha</label>
      <ul>
        <li>
          <a className="active" href="!#">
            Home
          </a>
        </li>
        <li>
          <a href="!#">Skills</a>
        </li>
        <li>
          <a href="!#">Projects</a>
        </li>
        <li>
          <a href="!#">Contact</a>
        </li>
      </ul>
      <label className="icon">
        <i className="fa fa-bars" aria-hidden="true" onClick={handleToggle}>{`${navbarOpen ? "show" : ""}`}</i>
      </label>
    </nav>
  );
};
export default NavBar;