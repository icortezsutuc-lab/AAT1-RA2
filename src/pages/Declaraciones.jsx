import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Declaraciones() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <main>

        <section className="tramites">
          <div className="container">

            <div className="section-header">

              <span className="section-badge">
                JadeControl
              </span>

              <h1>
                Gestión de declaraciones
              </h1>

              <p>
                Consulta y organiza la información
                relacionada con tus declaraciones tributarias.
              </p>

            </div>


            <div className="tramites-grid">

              {/* DECLARACIONES */}
              <article className="tarjeta-tramite">

                <div className="tarjeta-icon">
                  ✓
                </div>

                <h2>
                  Declaraciones registradas
                </h2>

                <p>
                  Consulta las declaraciones que se
                  encuentran registradas en el sistema.
                </p>

                <a href="/contribuyentes">
                  Ver contribuyentes →
                </a>

              </article>


              {/* INFORMACIÓN */}
              <article className="tarjeta-tramite">

                <div className="tarjeta-icon">
                  ▣
                </div>

                <h2>
                  Información tributaria
                </h2>

                <p>
                  Revisa información relacionada con
                  las obligaciones tributarias.
                </p>

                <a href="/tramites">
                  Ver trámites →
                </a>

              </article>


              {/* PAGOS */}
              <article className="tarjeta-tramite">

                <div className="tarjeta-icon">
                  $
                </div>

                <h2>
                  Pagos relacionados
                </h2>

                <p>
                  Consulta información relacionada con
                  los pagos de las obligaciones.
                </p>

                <a href="/pagos">
                  Ver pagos →
                </a>

              </article>

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </>
  );
}

export default Declaraciones;