import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projectSession">
      <h2>Mes projets récents</h2>
      
      <div id="Projects">
      <div className="project">
          <img className="projectImage pixedit" src="pixedit.png"></img>
          <span>
          <p>PixEdit : un outil de redimensionnement et de recadrage de photos</p>
          <button className="button-17" role="button">Lien Github</button>
          </span>
        </div>
        <div className="project">
          <img className="projectImage jacquotte" src="jacquotte.png"></img>
          <span>
          <p>Projet de site e-commerce/vitrine dans le cadre de mon alternance</p>
          <button className="button-17" role="button">Lien Github</button>
          </span>
        </div>
        
        <div className="project">
          <img className="projectImage galatron" src="galatron.png"></img>
          <span>
            <p>Interface web sur Rasberry Pi recevant les données du volume d'hydrogene dans l'éspace.</p>
            <button className="button-17" role="button">Lien Github</button>
          </span>
        </div>
      </div>  
  
      <div className="technos" >
        <img id="html" src="Html5.svg" className="icons"></img>
        <img src="Css3.svg" className="icons"></img>
        <img src="Sass.svg" className="icons"></img>
        <img src="Php.svg" className="icons"></img>
        <img id="laravel" src="Laravel.svg" className="icons"></img>
        <img src="Javascript.svg" className="icons"></img>
        <img src="React.svg" className="icons"></img>
        <img src="Docker.svg" className="icons"></img>
      </div>
      <div className="haute"></div>
      <div className="basse"></div>
    </div>
  );
};

export default Projects;
