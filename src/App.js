import React, { Component } from "react";

import BurgerMenu from "./TabBar/BurgerMenu/BurgerMenu";
import Projects from "./Projects/Projects";
import Accueil from "./Accueil/Accueil";
import About from "./About/About";
import Footer from "./Footer/Footer";
import "./App.css";

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

    // Add a small delay to ensure DOM elements are rendered
    setTimeout(() => {
      const handleScroll = () => {
        const aboutSection = document.querySelector('#opacityAbout');
        const projectsSection = document.querySelector('#opacityProject');

        // Check if the elements exist before proceeding
        if (!aboutSection || !projectsSection) {
          return;
        }

        const windowHeight = window.innerHeight;
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;
        const projectsSectionTop = projectsSection.getBoundingClientRect().top;

        const opacityThreshold = 0.5;

        if (aboutSectionTop < windowHeight * opacityThreshold) {
          aboutSection.classList.add('appear');
        } else {
          aboutSection.classList.remove('appear');
        }

        if (projectsSectionTop < windowHeight * opacityThreshold) {
          projectsSection.classList.add('appear');
        } else {
          projectsSection.classList.remove('appear');
        }

      };

      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },300 ); // Adjust the delay as needed
  }

  render() {
    return (
      <div className="App">
        {this.state.isHomePageVisible ? (
          <>
            <BurgerMenu />
            <Accueil />
            <About />
            <Projects />
            <Footer />
            <img id="cloud" src="./Cloud.svg" alt="Cloud"></img>
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
