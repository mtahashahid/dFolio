import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import codeIcon from "../../Assets/code.png";
import "./Navbar.css";
class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <div className="row alignment">
              <img
                alt="codeIcon"
                src={codeIcon}
                width="35"
                height="35"
                className="d-inline-block align-top"
              />{" "}
              <p className="name">
                Muhammad Taha
              </p>
            </div>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
