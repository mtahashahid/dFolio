import React, { Component } from "react";
import './Home.css'
import HomeImg from "../../../src/Assets/programmer1.svg";
import CodeMan from "../../../src/Assets/codeMan.svg";
class Home extends Component {
  render() {
    return (
      <div>
       <section className="text-dark p-5 text-lg-start">
        {/* <div className="container"> */}
          <div className="d-lg-flex align-items-center justify-content-between">
            <div>
              <h1> Hi! I am <span className="text-primary">Muhammad Taha</span></h1>
              <p className="lead my-4">I am a Computer Science Student | Web developer 
              | Wev development Enthusiast</p>
              <button className="btn btn-primary btn-lg">Download CV</button>
            </div>
            <img className="img-fluid my-4 w-lg-50" src={HomeImg} alt="taha"></img>
          </div>
        {/* </div> */}
       </section>
      </div>
    );
  }
}
export default Home;
