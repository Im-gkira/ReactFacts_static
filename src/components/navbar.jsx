import React from "react";
import logo from "../assets/react.svg";
export default function Navbar() {
  return (
    <nav>
      <div className="leftNav">
        <img src={logo} />
        <h3>ReactFacts</h3>
      </div>
      <div className="rightNav">
        <h4>React Course-Project 1</h4>
      </div>
    </nav>
  );
}
