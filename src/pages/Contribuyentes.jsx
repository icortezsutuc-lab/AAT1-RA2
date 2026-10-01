import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contribuyentes() {
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
                Gestión de contribuyentes
              </h1>

              <p>
                Consulta y administra la información
                de los contribuyentes registrados
                en JadeControl.
              </p>

            </div>


            <div className="tramites-grid">

              {/* REGISTRO */}
              <article className="tarjeta-tramite">

                <div className="tarjeta-icon">
                  ✓
                </div>

                <h2>
                  Registro de contribuyentes
                </h2>

                <p>
                  Consulta la información disponible
                  de los contribuyentes registrados
                  en el sistema.
                </p>

                <a href="/tramites">
                  Ver trámites →
                </a>

              </article>


              {/* INFORMACIÓN */}
              <article className="tarjeta-tramite">

                <div className="tarjeta-icon">
                  ▣
                </div>

                <h2>
                  Información registrada
                </h2>

                <p>
                  Mantén organizada la información
                  relacionada con cada contribuyente.
                </p>

                <a href="/declaraciones">
                  Ver declaraciones →
                </a>

              </article>


              {/* PAGOS */}
              <article className="tarjeta-tramite">

                <div className="tarjeta-icon">
                  $
                </div>

                <h2>
                  Obligaciones y pagos
                </h2>

                <p>
                  Consulta información relacionada
                  con declaraciones y pagos.
                </p>

                <a href="/pagos">
                  Consultar pagos →
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

export default Contribuyentes;