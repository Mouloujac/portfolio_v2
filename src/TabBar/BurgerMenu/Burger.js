import React from "react";
import "./BurgerMenu.css"

const Burger = ({ open, setOpen }) => {
  return (
    <button
      className="BurgerButton"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div className="burger-bar" id={`${open ? 'first-child' : ''}`}/>
      <div className="burger-bar" id={`${open ? 'second-child' : ''}`} />
      <div className="burger-bar" id={`${open ? 'third-child' : ''}`} />
    </button>
  );
};

export default Burger;
