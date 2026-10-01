import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <Link to="/" className="logo">
          JadeControl
        </Link>

        <nav className="nav-menu">

          <Link to="/">
            Inicio
          </Link>

          <Link to="/tramites">
            Trámites
          </Link>

          <Link to="/contribuyentes">
            Contribuyentes
          </Link>

          <Link to="/declaraciones">
            Declaraciones
          </Link>

          <Link to="/pagos">
            Pagos
          </Link>

          <Link to="/contacto">
            Contacto
          </Link>

        </nav>

        <Link
          to="/tramites"
          className="btn-navbar"
        >
          Iniciar trámite
        </Link>

      </div>

    </header>
  );
}

export default Navbar;