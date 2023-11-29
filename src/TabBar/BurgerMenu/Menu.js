import React from "react";
import "./BurgerMenu.css";

const Menu = ({ open }) => {
  return (
    <div className="Menu" id={`${open ? 'MenuOpen' : ''}`} open={open}>
      <a href="/">
        Projets
      </a>
      <a href="/"> 
        Accueil
      </a>
      <a href="/">
        A propos
      </a>
    </div>
  );
};

export default Menu;
