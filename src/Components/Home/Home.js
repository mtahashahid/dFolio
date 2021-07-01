import React, { Component } from "react";
import "./Home.css";
import HomeImg from "../../../src/Assets/programmer1.svg";
class Home extends Component {
  render() {
    return (
      <div className="home-main">
        <div className="content-left">
          <h1>Hi,I'm Taha</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quas eum, velit enim officia quae, saepe possimus hic perspiciatis
          </p>
          <div className="home-btns">
            <div>
              <a href="!#" className="btn">Contact Me</a>
            </div>
            <div>
            <a href="!#" className="btn">My Resume</a>
            </div>
          </div>
        </div>
        <div className="content-right">
          <img src={HomeImg} alt="home" className="home-img"></img>
        </div>
      </div>
    );
  }
}
export default Home;
