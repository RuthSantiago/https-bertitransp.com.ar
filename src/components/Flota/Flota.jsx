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
              <h3 className="tituloFlota">CHASIS</h3>
            </div>
            <a href="/Flota/Chasis" className="hiperImg">
              <img
                src="http://pixel-industry.com/html/trucking/img/pics/img01.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="flotas">
            <div className="containerTituloFlota">
              <h3 className="tituloFlota">SEMIRREMOLQUE DE FLOTA</h3>
            </div>
            <a href="/Flota/Semirremolque_de_flota" className="hiperImg">
              <img
                src="http://pixel-industry.com/html/trucking/img/slider/slide01.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="flotas">
            <div className="containerTituloFlota">
              <h3 className="tituloFlota">SEMIRREMOLQUE CON BARANDA</h3>
            </div>
            <a href="/Flota/Semirremolque_con_baranda" className="hiperImg">
              <img
                src="http://pixel-industry.com/html/trucking/img/slider/slide03.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="flotas">
            <div className="containerTituloFlota">
              <h3 className="tituloFlota">ARAÑAS PORTACONTENEDORES</h3>
            </div>
            <a href="/Flota/Arañas_portacontenedores" className="hiperImg">
              <img
                src="http://pixel-industry.com/html/trucking/img/pics/img01.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="flotas">
            <div className="containerTituloFlota">
              <h3 className="tituloFlota">CARRETONES ESPECIALES</h3>
            </div>
            <a href="/Flota/Carretones_especiales" className="hiperImg">
              <img
                src="http://pixel-industry.com/html/trucking/img/slider/slide01.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="flotas">
            <div className="containerTituloFlota">
              <h3 className="tituloFlota">TRANSPORTE DE AUTOMOVILES</h3>
            </div>
            <a href="/Flota/Transporte_de_automoviles" className="hiperImg">
              <img
                src="http://pixel-industry.com/html/trucking/img/slider/slide03.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Flota;
