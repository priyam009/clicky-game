import React from "react";
import "../App.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light d-flex flex-row justify-content-between nav-content">
      <div className="d-flex">
        <a href="/" className="navbar-brand">
          Clicky Game!
        </a>
      </div>
      <div>Click on the image to begin!</div>
      <ul className="navbar-nav d-flex flex-row">
        <li className="nav-item p-3">Score: {props.score}</li>
        <li className="nav-item p-3">Top Score: {props.topScore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
