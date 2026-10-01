function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
    >
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            Sistema de gestión tributaria
          </span>

          <h1>
            Gestiona tus trámites tributarios
            <span> de forma sencilla</span>
          </h1>

          <p>
            JadeControl reúne tus trámites,
            declaraciones, pagos y documentos
            en un solo lugar.
          </p>

          <div className="hero-buttons">

            <a
              href="#tramites"
              className="btn-primary"
            >
              Iniciar trámite
            </a>

            <a
              href="#beneficios"
              className="btn-secondary"
            >
              Conocer más
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;