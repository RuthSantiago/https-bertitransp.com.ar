import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../../images/LogoPng.png";
import logo2 from "../../images/LogoBerti-Transp-PhotoRoom.png-PhotoRoom.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(() => {
    return parseInt(localStorage.getItem("activeLink")) || null;
  });

  const handleLinkClick = (index) => {
    if (index !== activeLink) {
      setActiveLink(index);
      localStorage.setItem("activeLink", index);
    }
  };

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
          <a
            href="/"
            className={activeLink === 0 || activeLink === null ? "active" : ""}
            onClick={() => handleLinkClick(0)}
          >
            HOME
          </a>
          <a
            href="/Empresa"
            className={activeLink === 1 ? "active" : ""}
            onClick={() => handleLinkClick(1)}
          >
            EMPRESA
          </a>
          <a
            href="/Flota"
            className={activeLink === 2 ? "active" : ""}
            onClick={() => handleLinkClick(2)}
          >
            FLOTA
          </a>
          <a
            href="/Clientes"
            className={activeLink === 3 ? "active" : ""}
            onClick={() => handleLinkClick(3)}
          >
            CLIENTES
          </a>
          <a
            href="/Contacto"
            className={activeLink === 4 ? "active" : ""}
            onClick={() => handleLinkClick(4)}
          >
            CONTACTO
          </a>
        </div>
        <div
          className={`nav_toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
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
