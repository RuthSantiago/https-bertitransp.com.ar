import React, { useState } from 'react';

function MenuHamburguesa() {
    const [mostrarMenu, setMostrarMenu] = useState(false);
  
    const toggleMenu = () => {
      setMostrarMenu(!mostrarMenu);
    };
  
    return (
      <div className="menu-hamburguesa">
        <div className="icono-hamburguesa" onClick={toggleMenu}>
          ☰
        </div>
  
        {mostrarMenu && (
          <nav>
            <a href="/">Home</a>
            <a href="/Empresa">Empresa</a>
            <a href="/Flota">Flota</a>
            <a href="/Clientes">Clientes</a>
            <a href="/Contacto">Contacto</a>
          </nav>
        )}
      </div>
    );
  }
  
  export default MenuHamburguesa;
  