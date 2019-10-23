import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Game from "./components/Game";

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0
  };

  render() {
    return (
      <div className="wrapper">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
