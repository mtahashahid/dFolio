import React, { Component } from "react";
import './Home.css'
import HomeImg from "../../../src/Assets/programmer.svg";
class Home extends Component {
  render() {
    return (
      <div>
       <section className=" text-dark p-5 text-center">
        {/* <div className="container"> */}
          <div className="d-sm-flex">
            <div>
              <h1> Hi! I am <span className="text-primary">Muhammad Taha</span></h1>
              <p className="lead">I am a Computer Science Student | Web developer </p>
            </div>
            <img className="img-fluid w-50" src={HomeImg} alt="taha"></img>
          </div>
        {/* </div> */}
       </section>
      </div>
    );
  }
}
export default Home;
