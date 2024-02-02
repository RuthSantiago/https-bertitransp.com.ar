import "./App.css";
// import Home from "./components/Home";
import Home from "./components/Home/Home";
import Clientes from "./components/Clientes/Clientes";
import Contacto from "./components/Contacto/Contacto";
import Empresa from "./components/Empresa/Empresa";
import Flota from "./components/Flota/Flota";
import Error404NotFound from "./components/Error404NotFound/Error404NotFound";

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
        <Route path="*" element={<Error404NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
