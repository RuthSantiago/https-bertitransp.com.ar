import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../../images/LogoPng.png";
import logo2 from "../../images/LogoBerti-Transp-PhotoRoom.png-PhotoRoom.png"


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMenuToggle = () => {
      const body = document.body;
      const menuContainer = document.querySelector(".nav_items");

      if (body && menuContainer) {
        body.style.overflowY = isOpen ? "hidden" : "auto";
        menuContainer.classList.toggle("open", isOpen);
      }
    };

    handleMenuToggle();

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <div className="NavBar">
        <img className="nav_logo" src={logo} alt="logo header" />
          <div className={`nav_items ${isOpen ? "open" : ""}`}>
            <a href="/">Home</a>
            <a href="/Empresa">Empresa</a>
            <a href="/Flota">Flota</a>
            <a href="/Clientes">Clientes</a>
            <a href="/Contacto">Contacto</a>
          </div>
        <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)} >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <a href="/" className="containerLogoHome">
                <img src={logo2} alt="" className="logoHome"></img>
      </a>
    </div>
  );
};

export default NavBar;
