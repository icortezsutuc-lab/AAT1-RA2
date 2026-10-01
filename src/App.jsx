import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Inicio from "./pages/Inicio";
import Tramites from "./pages/Tramites";
import Contribuyentes from "./pages/Contribuyentes";
import Declaraciones from "./pages/Declaraciones";
import Pagos from "./pages/Pagos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Inicio />}
        />

        <Route
          path="/tramites"
          element={<Tramites />}
        />

        <Route
          path="/contribuyentes"
          element={<Contribuyentes />}
        />

        <Route
          path="/declaraciones"
          element={<Declaraciones />}
        />

        <Route
          path="/pagos"
          element={<Pagos />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;