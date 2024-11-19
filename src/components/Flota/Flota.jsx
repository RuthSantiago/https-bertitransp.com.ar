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
                src="https://upload.wikimedia.org/wikipedia/commons/1/11/Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg"
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
                src="https://media.newyorker.com/photos/61a5800b07516aaf7967f1ee/master/pass/Monroe-OldTrucksNewMoney.jpg"
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
                src="https://www.paccar.com/media/zolljmex/kw-t680-overlay.png"
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
                src="https://th-thumbnailer.cdn-si-edu.com/EVjbxTwm8D0QgLSGAqditPQAxdE=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/1a/63/1a63b7a8-d27e-401c-827f-318424c6942e/truck.jpg"
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
                src="https://upload.wikimedia.org/wikipedia/commons/1/11/Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg"
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
                src="https://media.newyorker.com/photos/61a5800b07516aaf7967f1ee/master/pass/Monroe-OldTrucksNewMoney.jpg"
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
