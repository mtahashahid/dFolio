import React, { Component } from "react";
import "./Home.css";
import HomeImg from "../../../src/Assets/programmer1.svg";
class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
       <div className="home-right">
         <h2>Hi there,I'm</h2>
         <h1>Muhammad Taha</h1>
         <h3>Freelancer</h3>
       </div>
       <div className="home-left">
         <div>
           <img src={HomeImg} alt="home"></img>
         </div>
       </div>
      </div>
    );
  }
}
export default Home;
