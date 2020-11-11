import React, { Component } from 'react'
import ProPic from "../../assets/portfolioPic.png";
import './navMenu.css';

export class NavMenu extends Component {
  render() {
    const sections = {
      Home: '/home',
      Software: '/software',
      Music: '/music',
      Design: '/design'
    }
    return (
      <div className="navMenu">
        <div className="logo">
          <img src={ProPic} alt="Profile Pic" />
        </div>
        {Object.keys(sections).map(section => {
          const path = sections[section]
          const currentSection = window.location.pathname === path
          const className = currentSection ? 'navMenuItemActive': 'navMenuItem'
          return (
            <div key={section} className={className}>
              {currentSection ? section : <a href={path}>{section}</a>}
            </div>
          )
        })}
      </div>
    )
  }
}

export default NavMenu