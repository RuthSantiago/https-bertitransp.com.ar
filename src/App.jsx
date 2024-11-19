import "./App.css";
// import Home from "./components/Home";
import Home from "./components/Home/Home";
import Clientes from "./components/Clientes/Clientes";
import Contacto from "./components/Contacto/Contacto";
import Empresa from "./components/Empresa/Empresa";
import Flota from "./components/Flota/Flota";
import Chasis from "./components/Flota/Flotas/Chasis/Chasis";
import SemirremolqueDeFlota from "./components/Flota/Flotas/SemirremolqueDeFlota/SemirremolqueDeFlota";
import SemirremolqueConBaranda from "./components/Flota/Flotas/SemirremolqueConBaranda/SemirremolqueConBaranda";
import ArañasPortacontenedores from "./components/Flota/Flotas/ArañasPortacontenedores/ArañasPortacontenedores";
import CarretonesEspeciales from "./components/Flota/Flotas/CarretonesEspeciales/CarretonesEspeciales";
import TransporteDeAutomoviles from "./components/Flota/Flotas/TransporteDeAutomoviles/TransporteDeAutomoviles";
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
        <Route path="/Flota/Chasis" element={<Chasis />}></Route>
        <Route
          path="/Flota/Semirremolque_De_Flota"
          element={<SemirremolqueDeFlota />}
        ></Route>
        <Route
          path="/Flota/Semirremolque_Con_Baranda"
          element={<SemirremolqueConBaranda />}
        ></Route>
        <Route
          path="/Flota/Arañas_Portacontenedores"
          element={<ArañasPortacontenedores />}
        ></Route>
        <Route
          path="/Flota/Carretones_Especiales"
          element={<CarretonesEspeciales />}
        ></Route>
        <Route
          path="/Flota/Transporte_De_Automoviles"
          element={<TransporteDeAutomoviles />}
        ></Route>
        <Route path="*" element={<Error404NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
