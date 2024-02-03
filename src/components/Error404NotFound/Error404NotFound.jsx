import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import E404 from "../../images/Leonardo_Diffusion_XL_Embark_on_a_journey_through_the_mysterio_0.jpg";
import "./Error404NotFound.css";

function Error404NotFound() {
  return (
    <div>
      <NavBar />
      <div className="colorWall">
        <div className="announcement">
          <h1>ERROR 404</h1>
          <h2>Disculpa, No encontramos lo que usted busca</h2>
        </div>
        <div className="container404">
          <img className="imagen404" src={E404} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error404NotFound;
