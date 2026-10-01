function TarjetaTramite({
  titulo,
  descripcion,
  enlace
}) {
  return (
    <article className="tarjeta-tramite">

      <div className="tarjeta-icon">
        ✓
      </div>

      <h3>
        {titulo}
      </h3>

      <p>
        {descripcion}
      </p>

      <a href={enlace}>
        Ver trámite →
      </a>

    </article>
  );
}

export default TarjetaTramite;