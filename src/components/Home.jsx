import React from "react";
import Header from "./Header";
import "../css/homeCSS.css"

function Home() {
    return (
        <div>
            <Header />
            <h3>Hola soy el Home</h3>
            <h1>La Red</h1>
            <h1>De Distribución</h1>
            <h1>Más Fuerte</h1>

            <div>
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
                <button>Ver Detalles</button>
            </div>
        </div>
    );
}

export default Home