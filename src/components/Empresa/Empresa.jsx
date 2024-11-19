import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Empresa.css";
import imgBox1 from "../../images/pixlr-image-generator-bdcdaad2-9303-4d78-bd58-5c950e139163.png"; // Ruta de la imagen

function Empresa() {
  return (
    <div>
      <NavBar />
      <div className="ContainerGeneralEmpresa">
        <div className="First3Boxes">
          <div className="BoxEmpresa">
            <h2>¿Quiénes Somos?</h2>
            <p>
              Somos una empresa familiar joven, dinámica e innovadora. Atentos a
              los requerimientos del mercado nos especializamos en el transporte
              terrestre de comercio exterior y hoy podemos garantizarles a
              nuestros clientes un amplio conocimiento del mercado de
              importación y exportación con una gran capacidad operativa en
              todos los puertos y depósitos fiscales de nuestro país.
            </p>
          </div>
          <div className="BoxEmpresa">
            <h2>Nuestro Objetivo</h2>
            <p>
              Brindar a todos nuestros clientes la mejor ecuación costo -
              beneficio, con honestidad y sentido común, garantizando que las
              cargas transportadas tendrán un soporte técnico y operativo acorde
              a sus necesidades. Consolidarnos día a día como referentes en el
              sector, con atención personalizada y trabajo en equipo junto a
              políticas instrumentadas de seguridad, eficiencia y eficacia en
              las operaciones como ejes fundamentales para el exitoso traslado
              de sus cargas.
            </p>
          </div>
          <div className="BoxEmpresa">
            <h2>Nuestra Misión</h2>
            <p>
              Ser reconocidos como una empresa sustentable, de crecimiento
              sostenido y constante inversión en equipamiento, renovación de
              flota y sistemas operativos.
            </p>
            <p>
              Altamente eficiente, profundamente humana y socialmente
              responsable, distinguida por su respeto por el medio ambiente y el
              uso responsable de los recursos con el mayor compromiso con las
              generaciones presentes y futuras.
            </p>
          </div>
        </div>
        <div className="BoxEmpresa2">
          <h2>Servicios</h2>
          <ul className="ServiciosList">
            <li style={{ backgroundImage: `url(${imgBox1})` }}>
              <p>
                Transporte terrestre Nacional e Internacional de cargas
                generales y cargas peligrosas.
              </p>
            </li>
            <li style={{ backgroundImage: `url(${imgBox1})` }}>
              <p>
                Utilitarios urbanos para Pick-Ups con vehículos de porte
                intermedio.
              </p>
            </li>
            <li style={{ backgroundImage: `url(${imgBox1})` }}>
              <p>Cargas proyecto y especiales con extra medidas y pesos.</p>
            </li>
            <li style={{ backgroundImage: `url(${imgBox1})` }}>
              <p>Transporte de sustancias alimenticias frío y congelado.</p>
            </li>
            <li style={{ backgroundImage: `url(${imgBox1})` }}>
              <p>Transporte de automóviles.</p>
            </li>
            <li style={{ backgroundImage: `url(${imgBox1})` }}>
              <p>Movimientos especiales con autoelevadores y grúas.</p>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Empresa;
