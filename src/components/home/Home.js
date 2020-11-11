import React, { Component } from 'react'
import ProPic from "../../assets/portfolioPic.png";
import './home.css';

export class Home extends Component {
  render() {
    return (
      <div className="homeSection">
        <img className="profilePicture" src={ProPic} alt="Profile Pic" />
        <p id="Welcome">Welcome to my page!!</p>
      </div>
    )
  }
}

export default Home