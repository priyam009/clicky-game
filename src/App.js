import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Game from "./components/Game";
import characters from "./characters.json";

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    characters: characters
  };

  //Reset all character to "clicked = false"
  resetCharacters = () => {
    this.state.characters.forEach(character => (character.clicked = false));
  };

  //Handle click on characters- update score
  handleClick = id => {
    const newCharacters = this.state.characters.filter(character => {
      if (character.id === id && !character.clicked) {
        character.clicked = true;
        this.setState({
          score: this.state.score + 1
        });
      } else if (character.id === id && character.clicked) {
        this.resetCharacters();
        this.setState({
          score: 0
        });
      }
      return character;
    });

    console.log("newCharacters", newCharacters);
    this.setState({
      characters: newCharacters
    });
  };

  render() {
    return (
      <>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <div className="div-content">
          <Header />
          <Wrapper>
            {this.state.characters.map(character => (
              <Game
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                handleClick={this.handleClick}
              />
            ))}
          </Wrapper>
        </div>
      </>
    );
  }
}

export default App;
