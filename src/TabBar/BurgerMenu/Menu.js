import React, {useState, useEffect} from "react";

import "./BurgerMenu.css";

const Menu = ({ open, setOpen }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleScroll = (event) => {
    // Get the section IDs
    const sectionIDs = ["#Accueil", "#projectSession", "#About"];

    // Get the current scroll position
    const currentScrollPosition = window.scrollY;
    
    

    // Find the active link based on scroll position
    const newActiveLink = sectionIDs.find((id) => {
      const sectionElement = document.querySelector(id);
      if (sectionElement && currentScrollPosition >= sectionElement.offsetTop && currentScrollPosition < sectionElement.offsetTop + sectionElement.offsetHeight) {
        return id;
      }
      setOpen(open)
      return null;
    });
    
    
    // Update the active link state
    setActiveLink(newActiveLink);
    
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Menu" id={`${open ? "MenuOpen" : ""}`} open={open}>
      <img src="./avatar.svg" />
      <div>
        <a
          href="#Accueil"
          onClick={handleScroll}
          className={activeLink === "#Accueil" ? "active" : ""}
        >
          Accueil
          <span className="underline"></span>
        </a>
        <a
          href="#Projects"
          onClick={handleScroll}
          className={activeLink === "#projectSession" ? "active" : ""}
        >
          Projets
          <span className="underline"></span>
        </a>
        <a
          href="#About"
          onClick={handleScroll}
          className={activeLink === "#About" ? "active" : ""}
        >
          A propos
          <span className="underline"></span>
        </a>
      </div>
    </div>
  );
};

export default Menu;
