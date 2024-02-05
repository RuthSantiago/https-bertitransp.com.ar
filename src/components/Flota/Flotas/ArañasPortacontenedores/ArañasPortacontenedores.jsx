import "./ArañasPortacontenedores.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../NavBar/NavBar";
import Footer from "../../../Footer/Footer";
import imagenGrande from "../../../../images/Leonardo_Diffusion_XL_Embark_on_a_journey_through_the_mysterio_0.jpg";
import imagendeprueba from "../../../../images/slide04.jpg";
const ArañasPortacontenedores = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenGrande);

  const handleImagenClick = (imagen) => {
    setImagenSeleccionada(imagen);
  };
  return (
    <div>
      <NavBar />
      <div>
        <div className="titleSpecificFlota">
          <h1>ARAÑAS PORTA-CONTENEDORES</h1>
        </div>
        <div className="backgroundDifuminadoFlota">
          <div
            className="blurryBackground"
            style={{ backgroundImage: `url(${imagenSeleccionada})` }}
          ></div>
          <div className="imagenGralFlota">
            <img src={imagenSeleccionada} alt="" />
          </div>
          <div className="containerMiniImagesFlotaFather">
            <ul className="containerMiniImagesFlota">
              <li onClick={() => handleImagenClick(imagendeprueba)}>
                <img src={imagendeprueba} alt="" />
              </li>
              <li onClick={() => handleImagenClick(imagenGrande)}>
                <img src={imagenGrande} alt="" />
              </li>
              <li onClick={() => handleImagenClick(imagendeprueba)}>
                <img src={imagendeprueba} alt="" />
              </li>
              <li onClick={() => handleImagenClick(imagenGrande)}>
                <img src={imagenGrande} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="descriptionProductFlota">
            <h2>Arañas Porta-contenedores</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              quasi consectetur ducimus sunt? Non enim veritatis quo fugit
              facere provident optio cupiditate. Placeat saepe nisi ipsam. Culpa
              expedita provident optio.
            </p>
            <div className="redirectionProductFlota">
              <div>
                <Link to="/Contacto">
                  <button className="redirectionProductFlotaButton">
                    CONTACTANOS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ArañasPortacontenedores;
