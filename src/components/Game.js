import React from "react";
import "../App.css";

function Game(props) {
  // console.log(props.id);
  return (
    <button onClick={() => props.handleClick(props.id)}>
      <div className="card character-card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </button>
  );
}

export default Game;
