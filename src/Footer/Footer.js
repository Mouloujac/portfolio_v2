import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer-distributed">

        <div className="footer-left">

        <p className="footer-links">
            <a href="#Accueil" className="link-1">Home</a>
            
            <a href="#About">About</a>
            
            <a href="#Projects">Projects</a>
        </p>

        </div>

        <div className="footer-center">
        <div className="footer-icons">

            <a alt="gmail" href="mailto:theolecolley@gmail.com"><i className="fi fi-brands-google"></i></a>
            <a alt="linkedin" href="#"><i className="fi fi-brands-linkedin"></i></a>
            <a alt="github" href="#"><i className="fi fi-brands-github"></i></a>

        </div>
       
        </div>

        <div className="footer-right">

            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>19 rue de la Pigacière </span> 14 000 CAEN, France</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+33 698294858</p>
            </div>

        </div>

    </footer>
  );
};

export default Footer;
