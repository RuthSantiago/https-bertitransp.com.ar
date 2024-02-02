import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Flota.css";
function Flota() {
  return (
    <div>
      <NavBar />
      <div className="containerGeneralFlota">
        <div className="containerImagenFlota">
          <div className="messageImagenFlota">
            <h2>FLOTA DE VEHICULOS</h2>
            <p>texto</p>
          </div>
          <img
            src="https://media.istockphoto.com/id/1355096028/es/foto/cami%C3%B3n-grande-de-diez-ruedas-con-contenedor-f.jpg?s=1024x1024&w=is&k=20&c=mc_TdYG9LO-r-wsbN7uzeYyhabcDloT1ixavNgToBKQ="
            alt=""
          />
        </div>
        <div className="containerMessageFlota">
          <h2>Nuestra Flota de Vehículos</h2>
          <p>OFRECIENDO UNA ALTA GAMA DE SERVICIOS Y MEDIOS DE TRANSPORTE</p>
        </div>
        <div className="containerFlotas">
          <div className="flotas">
            <div className="containerTituloFlota">
              <h3 className="tituloFlota">TEXTO DE FLOTA</h3>
            </div>
            <img
              src="http://pixel-industry.com/html/trucking/img/pics/img01.jpg"
              alt=""
            />
          </div>
          <div className="flotas">
            <div className="containerTituloFlota">
              <h3 className="tituloFlota">TEXTO DE FLOTA</h3>
            </div>
            <img
              src="http://pixel-industry.com/html/trucking/img/slider/slide01.jpg"
              alt=""
            />
          </div>
          <div className="flotas">
            <div className="containerTituloFlota">
              <h3 className="tituloFlota">TEXTO DE FLOTA</h3>
            </div>
            <img
              src="http://pixel-industry.com/html/trucking/img/slider/slide03.jpg"
              alt=""
            />
          </div>
          <div className="flotas">
            <div className="containerTituloFlota">
              <h3 className="tituloFlota">TEXTO DE FLOTA</h3>
            </div>
            <img
              src="http://pixel-industry.com/html/trucking/img/pics/img01.jpg"
              alt=""
            />
          </div>
          <div className="flotas">
            <div className="containerTituloFlota">
              <h3 className="tituloFlota">TEXTO DE FLOTA</h3>
            </div>
            <img
              src="http://pixel-industry.com/html/trucking/img/slider/slide01.jpg"
              alt=""
            />
          </div>
          <div className="flotas">
            <div className="containerTituloFlota">
              <h3 className="tituloFlota">TEXTO DE FLOTA</h3>
            </div>
            <img
              src="http://pixel-industry.com/html/trucking/img/slider/slide03.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Flota;
