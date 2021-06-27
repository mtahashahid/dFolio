import React, { Component } from "react";
import "./Home.css";
import HomeImg from "../../../src/Assets/programmer1.svg";
class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
       <div className="home-right">
         <h1>Hi there,I'm Muhammad Taha</h1>
             
       </div>
       <div className="home-left">   
           <img src={HomeImg} alt="home"></img>
       </div>
      </div>
    );
  }
}
export default Home;
