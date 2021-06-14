import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="nav-bg" variant="dark">
          <Navbar.Brand href="#home" className="name">
            Muhammad Taha
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ml-auto text-center"
              style={{ fontFamily: "Varela Round,sans-serif" }}
            >
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
