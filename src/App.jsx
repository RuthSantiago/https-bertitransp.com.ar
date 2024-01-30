import "./App.css";
import Home from "./components/Home";
import Clientes from "./components/Clientes";
import Contacto from "./components/Contacto";
import Empresa from "./components/Empresa";
import Flota from "./components/Flota";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Empresa" element={<Empresa />} />
        <Route path="/Flota" element={<Flota />} />
      </Routes>
    </div>
  );
}

export default App;
