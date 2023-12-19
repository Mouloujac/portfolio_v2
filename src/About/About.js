import React from "react";
import "./About.css";

const About = () => {
  return ( 
    <div id="About">
      <div id="opacityAbout">
        <h2><span></span>About me ?<span></span></h2>
        <div id="biblio">
          <div className="block" id="portrait">
            <img id="photo" alt="Photo Theo Lecolley" src="theo.jpg"></img>
          </div>
          <div className="block" id="cv">
            <p>Hi, im Theo Lecolley,</p>
            <p>I am a French Front-End Developer based in CAEN. </p>
            <p>In 2021, after obtaining my DAEU, I pursued a web/mobile development training in 2022, followed by an apprenticeship in application development with the company Dl Négoce.</p>
            <p>I am currently seeking my first job as a web and mobile developer. I am eager to apply my skills to a company that offers technical challenges and innovative solutions.</p>
            
          
          </div>
          
        </div>
        <div className="technos" >
          
          
          <div className="techno">
          <h3>Mastered technologies</h3>
            <div id="mastered">
              <img id="html" src="Html5.svg" className="icons"></img>
              <div className="vertical-text"><span></span>Html</div>
              <img src="Css3.svg" className="icons"></img>
              <div className="vertical-text"><span></span>Css</div>
              <img src="Sass.svg" className="icons"></img>
              <div className="vertical-text"><span></span>Sass</div>
              <img src="Php.svg" className="icons"></img>
              <div className="vertical-text"><span></span>Php</div>
              <img id="laravel" src="Laravel.svg" className="icons"></img>
              <div className="vertical-text"><span></span>Laravel</div>
              <img src="Javascript.svg" className="icons"></img>
              <div className="vertical-text"><span></span>Javascript</div>
            </div>
          </div>
          <div className="techno">
            <h3>Technologies currently being learned</h3>
            <div id="learned">
              <img src="React.svg" className="icons"></img>
              <div className="vertical-text"><span></span>React.js</div>
              <img src="Docker.svg" className="icons"></img>
              <div className="vertical-text"><span></span>Docker</div>
              <img src="Java.svg" className="icons"></img>
              <div className="vertical-text"><span></span>Java</div>
              <img src="C.svg" className="icons"></img>
              <div className="vertical-text"><span></span>C+</div>
              <img src="Python.svg" className="icons"></img>
              <div className="vertical-text"><span></span>Python</div>
              <img src="Typescript.svg" className="icons"></img>
              <div className="vertical-text"><span></span>Typescript</div>
            </div>
          </div>
        </div>
      </div>     
    </div>
  );
};

export default About;
