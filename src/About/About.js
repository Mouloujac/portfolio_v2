import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="About">
      <h2>Qui suis-je ?</h2>
      <div id="biblio">
        <div className="block" id="portrait">
          <img id="photo" src="cartoon-theo.png"></img>
        </div>
      
        <div className="block" id="cv">
          <p>Je m'appelle Théo Lecolley, développeur web et mobile passionné Francais dommicillié a CAEN</p>
          <p>Après avoir obtenu mon DAEU EN 2021, j'ai suivi une formation de développeur web/web-mobile EN 2022. </p>
          <p> En 2023, j'ai ensuite suivi une formation de concepteur développeur d'applications en alternance chez DL Négoce, une entreprise spécialisée dans le développement d'ERP pour les vendeurs en matériaux. Au cours de cette expérience, j'ai appris à travailler en équipe et à gérer des projets plus complexes.</p>
          <p>Je suis actuellement à la recherche de mon premier emploi en tant que développeur web et mobile. Je suis impatient de mettre mes compétences au service d'une entreprise proposant un challenge technique et sur des solutions innovantes</p>
        
        </div>
        
      </div>
      
                
    </div>
  );
};

export default About;
