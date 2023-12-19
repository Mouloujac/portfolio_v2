import React from "react";
import "./Projects.css";
import Footer from "../Footer/Footer";

const Projects = () => {
  return (
    <div id="projectSession">
      <div id="opacityProject">
      
        <h2>Recent projects</h2>
        
        <div id="Projects">
        <div className="project">
            <img className="projectImage pixedit" src="pixedit.png"></img>
            <span>
            <p>A photo resizing and cropping tool.</p>
            <a className="button-17" role="button" href="https://github.com/Mouloujac/PixEdit">Github link</a>
            </span>
          </div>
          <div className="project">
            <img className="projectImage jacquotte" src="jacquotte.png"></img>
            <span>
            <p>E-commerce/showcase site project as part of my work-study program.</p>
            <a className="button-17" role="button" href="https://github.com/Mouloujac/Projet_site_vitrine">Github link</a>
            </span>
          </div>
          
          <div className="project">
            <img className="projectImage galatron" src="galatron.png"></img>
            <span>
              <p>Web interface on Rasberry Pi receiving data on the volume of hydrogen in space.</p>
              <a className="button-17" role="button" href="">versioning in progress</a>
            </span>
          </div>
        </div>  
    
        
        <div className="haute"></div>
        <div className="basse"></div>
      </div>
    </div>
  );
};

export default Projects;
