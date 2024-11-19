import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importa useNavigate y useLocation desde react-router-dom
import "./NavBar.css";
import logo from "../../images/LogoPng.png";
import logo2 from "../../images/LogoBerti-Transp-PhotoRoom.png-PhotoRoom.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(() => {
    return parseInt(localStorage.getItem("activeLink")) || null;
  });

  const navigate = useNavigate(); // Obtén la función de navegación
  const location = useLocation(); // Obtén la ubicación actual

  const handleLinkClick = (index) => {
    if (index !== activeLink) {
      setActiveLink(index);
      localStorage.setItem("activeLink", index);
    }
  };

  useEffect(() => {
    const path = location.pathname; // Obtén la ruta actual

    // Mapea la ruta actual con el índice del enlace correspondiente
    const linkIndexes = {
      "/": 0,
      "/Empresa": 1,
      "/Flota": 2,
      "/Clientes": 3,
      "/Contacto": 4,
    };

    setActiveLink(linkIndexes[path]); // Establece el enlace activo basado en la ruta actual
  }, [location.pathname]);

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
            onClick={(event) => {
              event.preventDefault(); // Evita el comportamiento predeterminado del enlace
              handleLinkClick(0);
              navigate("/"); // Navega a la ruta especificada
            }}
          >
            HOME
          </a>
          <a
            href="/Empresa"
            className={activeLink === 1 ? "active" : ""}
            onClick={(event) => {
              event.preventDefault(); // Evita el comportamiento predeterminado del enlace
              handleLinkClick(1);
              navigate("/Empresa"); // Navega a la ruta especificada
            }}
          >
            EMPRESA
          </a>
          <a
            href="/Flota"
            className={activeLink === 2 ? "active" : ""}
            onClick={(event) => {
              event.preventDefault(); // Evita el comportamiento predeterminado del enlace
              handleLinkClick(2);
              navigate("/Flota"); // Navega a la ruta especificada
            }}
          >
            FLOTA
          </a>
          <a
            href="/Clientes"
            className={activeLink === 3 ? "active" : ""}
            onClick={(event) => {
              event.preventDefault(); // Evita el comportamiento predeterminado del enlace
              handleLinkClick(3);
              navigate("/Clientes"); // Navega a la ruta especificada
            }}
          >
            CLIENTES
          </a>
          <a
            href="/Contacto"
            className={activeLink === 4 ? "active" : ""}
            onClick={(event) => {
              event.preventDefault(); // Evita el comportamiento predeterminado del enlace
              handleLinkClick(4);
              navigate("/Contacto"); // Navega a la ruta especificada
            }}
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
