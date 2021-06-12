import React, { Component } from "react";
import { Container,Navbar } from 'react-bootstrap';
import codeIcon from '../../Assets/code.png'
class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="codeIcon"
                src={codeIcon}
                width="35"
                height="35"
                className="d-inline-block align-top"
              />{" "}
              Muhammad Taha
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
