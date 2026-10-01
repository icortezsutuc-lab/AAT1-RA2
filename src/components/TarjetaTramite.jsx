import { Link } from "react-router-dom";

function TarjetaTramite({
  icono,
  titulo,
  descripcion,
  enlace
}) {
  return (
    <article className="tarjeta-tramite">
      <div className="tarjeta-icono">
        {icono}
      </div>

      <h3>{titulo}</h3>

      <p>{descripcion}</p>

      <Link to={enlace} className="tarjeta-enlace">
        Ver {titulo.toLowerCase()} →
      </Link>
    </article>
  );
}

export default TarjetaTramite;