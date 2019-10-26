import React from "react";
import "../App.css";

function Navbar(props) {
  if(props.instructions==="You guessed correctly!") {
    var classname = "nav-instruction correct"
  } else if (props.instructions==="You guessed incorrectly!") {
    var classname = "nav-instruction incorrect"
  } else {
    var classname = "nav-instruction"
  }

  return (
    <nav className="navbar navbar-light d-flex flex-row justify-content-between nav-content">
      <div className="d-flex">
        <a href="/" className="navbar-brand">
          Clicky Game!
        </a>
      </div>
      <div className={classname}>{props.instructions}</div>
      <ul className="navbar-nav d-flex flex-row">
        <li className="nav-item p-3">Score: {props.score}</li>
        <li className="nav-item p-3">Top Score: {props.topScore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
