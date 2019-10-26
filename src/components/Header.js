import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="card header-content text-center">
      <div className="card-body d-flex flex-column align-item-center">
        <h1 className="card-title">CLICK It to MAKE It!</h1>
        <p className="card-text header-para">
          Click on the image to earn points, but don't click on any more than
          once!
        </p>
      </div>
    </div>
  );
}

export default Header;
