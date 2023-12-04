import React, { Component } from "react";

import BurgerMenu from "./TabBar/BurgerMenu/BurgerMenu";
import Projects from "./Projects/Projects";
import Accueil from "./Accueil/Accueil";
import About from "./About/About";

import "./App.css"

class App extends Component {
  state = {
    isHomePageVisible: true,
  };

  handleClick = () => {
    this.setState({
      isHomePageVisible: true,
    });
  };

  componentDidMount() {
    document.body.addEventListener("click", this.handleClick);
  }


  render() {
    return (
      <div className="App">
        {this.state.isHomePageVisible ? (
            <>
              <BurgerMenu /> 
              <Accueil />
              <Projects />
              <About />
              <img id="cloud" src="./Cloud.svg"></img>  
              <img id="cloud2" src="./Cloud2.svg"></img>  
            </>      
        ) : (
          <div>
            <h1>Cliquez pour afficher la page principale</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
