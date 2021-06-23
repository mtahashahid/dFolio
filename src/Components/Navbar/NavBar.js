import React, { Component } from "react";
import "./Navbar.css";
class NavBar extends Component {
  handleClick(){
    
  }
  render() {
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
          <i className="fa fa-bars" aria-hidden="true" onClick={this.handleClick}></i>
        </label>
      </nav>
    );
  }
}
export default NavBar;
