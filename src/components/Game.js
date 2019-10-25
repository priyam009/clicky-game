import React from "react";
import "../App.css";

function Game(props) {
  return (
    //On click button handler
    <button className="game-button" onClick={() => props.handleClick(props.id)}>
      <div className="card character-card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </button>
  );
}

export default Game;
