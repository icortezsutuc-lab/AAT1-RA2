function Beneficios() {
  const beneficios = [
    {
      titulo: "Gestión sencilla",
      descripcion:
        "Administra tus trámites desde un solo lugar."
    },
    {
      titulo: "Información organizada",
      descripcion:
        "Consulta tus datos y documentos de forma organizada."
    },
    {
      titulo: "Acceso rápido",
      descripcion:
        "Encuentra rápidamente los servicios que necesitas."
    }
  ];

  return (
    <section
      id="beneficios"
      className="beneficios"
    >

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            Beneficios
          </span>

          <h2>
            Todo lo que necesitas en un solo lugar
          </h2>

          <p>
            JadeControl facilita la consulta y organización
            de información relacionada con tus trámites.
          </p>

        </div>

        <div className="beneficios-grid">

          {beneficios.map((beneficio, index) => (
            <article
              className="beneficio-card"
              key={index}
            >

              <div className="beneficio-icon">
                {index === 0 && "✓"}
                {index === 1 && "▣"}
                {index === 2 && "→"}
              </div>

              <h3>
                {beneficio.titulo}
              </h3>

              <p>
                {beneficio.descripcion}
              </p>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Beneficios;