import React from "react";
import "./Footer.css";
import logo from "../../images/LogoPng.png";
import gmail from "../../images/gmail.png";
import whatsapp from "../../images/whatsapp.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="headerFromFooter">
        <div className="containerMainLogoFooter">
          <img className="logoFooter" src={logo} alt="" />
        </div>
        <div>
          <div className="contactUsContainerFooter">
            {/* <h3 className="contactUsFooter">CONTACTANOS</h3> */}
          </div>
          <div className="containerLogoFooter">
            <a href="/contacto">
              <img src={gmail} alt="" />
            </a>
            <a href="https://wa.me/ 541123329204">
              <img src={whatsapp} alt="" />
            </a>
            <a href="https://www.instagram.com/bertitransp?igsh=MWozNjJwcGtwNTUxZw==">
              <img src={instagram} alt="" />
            </a>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={linkedin} alt="" />
            </a>
          </div>
          <div className="adressFooter">
            <p>Morse 2985, Doc Sud</p>
          </div>
        </div>
      </div>
      <div className="footerFromFooter">
        <a href="/">Home </a>
        <p className="barrita">|</p>
        <a href="/empresa">Empresa </a>
        <p className="barrita">|</p>
        <a href="/flota">Flota </a>
        <p className="barrita">|</p>
        <a href="/clientes">Clientes </a>
        <p className="barrita">|</p>
        <a href="/contacto">Contacto </a>
      </div>
    </div>
  );
};

export default Footer;
