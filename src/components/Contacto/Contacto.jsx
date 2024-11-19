import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Contacto.css";

function Contacto() {
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const errors = {};

    formData.forEach((value, key) => {
      if (!value.trim()) {
        errors[key] = `${key} es requerido`;
      }
    });

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Aquí podrías enviar el formulario
      event.target.submit();
    }
  };

  return (
    <div>
      <NavBar />
      <div className="containerForm">
        <form
          onSubmit={handleFormSubmit}
          action="https://formsubmit.co/santiagoruth1704@gmail.com"
          method="POST"
        >
          <h2>¿Tenés alguna duda?</h2>
          <h1>Contactanos</h1>
          <div className="errorContainer">
            {errors.Nombre && <span className="error">{errors.Nombre}</span>}
          </div>
          <label htmlFor="Nombre">Nombre</label>
          <input type="text" name="Nombre" placeholder="Nombre" />
          <div className="errorContainer">
            {errors.Apellido && (
              <span className="error">{errors.Apellido}</span>
            )}
          </div>{" "}
          <label htmlFor="Apellido">Apellido</label>
          <input type="text" name="Apellido" placeholder="Apellido" />
          <div className="errorContainer">
            {errors.Email && <span className="error">{errors.Email}</span>}
          </div>{" "}
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" placeholder="Email" />
          <div className="errorContainer">
            {errors.Sujeto && <span className="error">{errors.Sujeto}</span>}
          </div>{" "}
          <label htmlFor="Sujeto">Asunto</label>
          <input type="text" name="Sujeto" placeholder="Asunto" />
          <div className="errorContainer">
            {errors.Comentarios && (
              <span className="error">{errors.Comentarios}</span>
            )}
          </div>{" "}
          <label htmlFor="Comentarios" className="message">
            Mensaje
          </label>
          <div className="textarea">
            <textarea
              name="Comentarios"
              cols="30"
              rows="10"
              placeholder="Deje aquí su mensaje..."
            ></textarea>
          </div>
          <div className="button">
            <input type="submit" value="Enviar" />
          </div>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;
