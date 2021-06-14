import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import codeIcon from "../../Assets/code.png";
import "./Navbar.css";
class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="nav-bg" variant="dark">
          {/* <img
            alt=""
            src={codeIcon}
            width="30"
            height="30"
            // className="d-inline-block align-top"
          /> */}
          <Navbar.Brand href="#home" className="name">
            Muhammad Taha
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="dark" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#skills" className="mr-4 pl-4 text-secondary h5">
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className="mr-4 pl-4 text-secondary h5"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#achievements"
                className="mr-4 pl-4 text-secondary h5"
              >
                Achievements
              </Nav.Link>
              <Nav.Link
                href="#contacts"
                className="mr-4 pl-4 text-secondary h5"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
