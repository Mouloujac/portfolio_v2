import React, { Component } from "react";

import Accueil from "../Accueil/Accueil";
import Projects from "../Projects/Projects";
import About from "../About/About";

import "./SwiperPage.css";

class SwiperPage extends Component {
 

  render() {
    return (
      <div className="Swiper">
        <Projects/>
        <Accueil/>
        <About/>
      </div>
    );
  }
}

export default SwiperPage;
