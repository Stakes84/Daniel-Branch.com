import React from "react";
import ProPic from "./components/portfolioPic.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ProPic} alt="Profile Pic" />
        <p id="Welcome">Welcome to my page!!</p>
      </header>
    </div>
  );
}

export default App;
