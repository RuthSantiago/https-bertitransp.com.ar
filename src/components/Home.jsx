import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import "../css/homeCSS.css";
import logo from "../images/LogoBerti-Transp-PhotoRoom.png-PhotoRoom.png";
import head from "../images/slide04.jpg";
// import MenuHamburguesa from "../components/BurguerMenu"
import NavBar from "./NavBar/NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="headImg">
        <img src={head} alt="imagen" />
        <h1>LA RED</h1>
        <h1>DE DISTRIBUCIÓN</h1>
        <h1>MÁS FUERTE</h1>
      </div>

      <div className="firstDiv">
        <div className="backgroundimg">
          <div className="detailsContainer">
            <div className="containerMiniImagesHome">
              <img
                className="miniImagesHome"
                src="http://pixel-industry.com/html/trucking/img/slider/slide03.jpg"
                alt=""
              />

              <div className="texto">
                <h2>Texto 1</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  distinctio beatae, accusantium cumque animi at alias deserunt
                  voluptatum, asperiores quisquam dolorum voluptates reiciendis
                  cum aspernatur ex odio officia non maiores.
                </p>
              </div>
            </div>
            <div className="containerMiniImagesHome">
              <img
                className="miniImagesHome"
                src="http://pixel-industry.com/html/trucking/img/pics/img01.jpg"
                alt=""
              />
              <div className="texto">
                <h2>Texto 1</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  distinctio beatae, accusantium cumque animi at alias deserunt
                  voluptatum, asperiores quisquam dolorum voluptates reiciendis
                  cum aspernatur ex odio officia non maiores.
                </p>
              </div>
            </div>
            <div className="containerMiniImagesHome">
              <img
                className="miniImagesHome"
                src="http://pixel-industry.com/html/trucking/img/slider/slide01.jpg"
                alt=""
              />
              <div className="texto">
                <h2>Texto 1</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  distinctio beatae, accusantium cumque animi at alias deserunt
                  voluptatum, asperiores quisquam dolorum voluptates reiciendis
                  cum aspernatur ex odio officia non maiores.
                </p>
              </div>
            </div>
          </div>
          <div className="containerButtonHome">
            <Link to="/flota">
              <button className="buttonHome">VER DETALLES</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="whatWeOffer">
        <h2 className="customHeading">NUESTROS SERVICIOS</h2>
        <p className=" customP">SERVICIOS DE LÓGISTICA</p>
        <ul>
          <li>
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#5e8c61"
                  d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                />
              </svg>
            </div>
            <div className="textoServices">
              <h3>Transporte nacional e internacional</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                temporibus dolorum reiciendis ullam explicabo qui assumenda
                dolor quos cupiditate! Quia possimus perferendis ex nobis cum
                vero repellat, amet eius fuga!
              </p>
            </div>
          </li>
          <li>
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  fill="#538c61"
                  d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"
                />
              </svg>
            </div>
            <div className="textoServices">
              <h3>Utilitarios Urbanos para Pick-Ups</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci sapiente dolore, aspernatur asperiores fugiat,
                voluptatum facere rerum ducimus, dolorum praesentium illo.
                Dolores, autem accusantium? Possimus facilis quaerat consectetur
                distinctio dicta.
              </p>
            </div>
          </li>
          <li>
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#5e8c61"
                  d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                />
              </svg>
            </div>
            <div className="textoServices">
              <h3>Cargas Proyecto y Especiales</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione perferendis vero consequatur dolore sit distinctio
                excepturi sed facere non quaerat reprehenderit reiciendis
                pariatur, nihil quia quasi molestias harum, corrupti qui!
              </p>
            </div>
          </li>
          <li>
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#5e8c61"
                  d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"
                />
              </svg>
            </div>
            <div className="textoServices">
              <h3>Transporte de Sustancias Alimenticias</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam laboriosam accusamus ullam aut. Perferendis nemo
                accusamus distinctio quos corrupti dolor aut. Sunt, reiciendis
                blanditiis. Ea odit in quasi temporibus iusto!
              </p>
            </div>
          </li>
          <li>
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#5c8e61"
                  d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                />
              </svg>
            </div>
            <div className="textoServices">
              <h3>Transporte de Automóviles</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam laboriosam accusamus ullam aut. Perferendis nemo
                accusamus distinctio quos corrupti dolor aut. Sunt, reiciendis
                blanditiis. Ea odit in quasi temporibus iusto!
              </p>
            </div>
          </li>
          <li>
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  fill="#5c8e61"
                  d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                />
              </svg>
            </div>
            <div className="textoServices">
              <h3>Movimientos Especiales con Grúas</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam laboriosam accusamus ullam aut. Perferendis nemo
                accusamus distinctio quos corrupti dolor aut. Sunt, reiciendis
                blanditiis. Ea odit in quasi temporibus iusto!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
