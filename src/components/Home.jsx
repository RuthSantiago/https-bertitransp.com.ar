import React from "react";
import {Link, Route, Routes} from "react-router-dom"

import "../css/homeCSS.css"
import logo from "../images/LogoBerti-Transp-PhotoRoom.png-PhotoRoom.png"
import head from "../images/slide04.jpg"
// import MenuHamburguesa from "../components/BurguerMenu"
import NavBar from "./NavBar/NavBar";

function Home() {
    return (
        <div>
            <NavBar/>
            {/* <MenuHamburguesa /> */}
            <div className="headImg">
                    <img src={head} alt="imagen" />
                            <h1>LA RED</h1>
                            <h1>DE DISTRIBUCIÓN</h1>
                            <h1>MÁS FUERTE</h1>
            </div>

            <div>
                <div className="backgroundimg">
                    <div className="detailsContainer">
                        <div className="containerMiniImagesHome">
                            <img className="miniImagesHome" src="http://pixel-industry.com/html/trucking/img/slider/slide03.jpg" alt="" />
                            {/* <p>Translate this text: "GROUND SHIPPING
    We have a wide experience in overland industry specific logistic solutions like pharmaceutical logistics, retail and automotive logistics by train or road."</p> */}
                            <div className="texto">
                                <h2>Texto 1</h2>
                                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, distinctio beatae, accusantium cumque animi at alias deserunt voluptatum, asperiores quisquam dolorum voluptates reiciendis cum aspernatur ex odio officia non maiores.</p>
                            </div>
                        </div>
                        <div className="containerMiniImagesHome">
                            <img className="miniImagesHome" src="http://pixel-industry.com/html/trucking/img/pics/img01.jpg" alt="" />
                            {/* <p>Translate this text: "GROUND SHIPPING
    We have a wide experience in overland industry specific logistic solutions like pharmaceutical logistics, retail and automotive logistics by train or road."</p> */}
                            <div className="texto">
                                <h2>Texto 1</h2>
                                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, distinctio beatae, accusantium cumque animi at alias deserunt voluptatum, asperiores quisquam dolorum voluptates reiciendis cum aspernatur ex odio officia non maiores.</p>
                            </div>
                        </div>
                        <div className="containerMiniImagesHome">
                            <img className="miniImagesHome" src="http://pixel-industry.com/html/trucking/img/slider/slide01.jpg" alt="" />
                            {/* <p>Translate this text: "GROUND SHIPPING
    We have a wide experience in overland industry specific logistic solutions like pharmaceutical logistics, retail and automotive logistics by train or road."</p> */}
                            <div className="texto">
                                <h2>Texto 1</h2>
                                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, distinctio beatae, accusantium cumque animi at alias deserunt voluptatum, asperiores quisquam dolorum voluptates reiciendis cum aspernatur ex odio officia non maiores.</p>
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
        </div>
    );
}

export default Home