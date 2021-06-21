import React, { Component } from "react";
import "./Home.css";
import HomeImg from "../../../src/Assets/programmer1.svg";
class Home extends Component {
  render() {
    return (
      <div>
        <section className="text-dark p-5 text-lg-start">
          {/* <div className="container"> */}
          <div className="d-lg-flex align-items-center justify-content-between text-center">
            <div>
              <h1 className="display-4 ">
                {" "}
                Hi, I am Muhammad Taha
                <span role="img" className="wave-emoji" aria-label="Hand waving">
                  👋
                </span>
              </h1>
              <p className="lead my-4 intro-text">
                I am a Computer Science Student | Web developer | Wev
                development Enthusiast{" "}
              </p>
              <button className="btn btn-primary btn-lg  ml-sm-2 my-2 col-lg-4">Contact</button>
              <button className="btn btn-primary btn-lg  ml-lg-4 ml-sm-2 my-2 col-lg-4">Download CV</button>
            </div>
            <img
              className="img-fluid my-4 w-lg-50"
              src={HomeImg}
              alt="taha"
            ></img>
          </div>
          {/* </div> */}
        </section>
      </div>
    );
  }
}
export default Home;
