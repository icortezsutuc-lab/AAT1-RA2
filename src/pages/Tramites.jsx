import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Tramites() {
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
                Trámites tributarios
              </h1>

              <p>
                Consulta y gestiona los diferentes
                trámites disponibles en JadeControl.
              </p>

            </div>


            <div className="tramites-grid">

              {/* DECLARACIONES */}
              <article className="tarjeta-tramite">

                <div className="tarjeta-icon">
                  ✓
                </div>

                <h2>
                  Declaraciones
                </h2>

                <p>
                  Gestiona y consulta información
                  relacionada con tus declaraciones
                  tributarias.
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
                  Pagos
                </h2>

                <p>
                  Consulta información relacionada
                  con pagos y obligaciones tributarias.
                </p>

                <a href="/pagos">
                  Ver pagos →
                </a>

              </article>


              {/* CONTRIBUYENTES */}
              <article className="tarjeta-tramite">

                <div className="tarjeta-icon">
                  ▣
                </div>

                <h2>
                  Contribuyentes
                </h2>

                <p>
                  Consulta y organiza la información
                  de los contribuyentes registrados.
                </p>

                <a href="/contribuyentes">
                  Ver contribuyentes →
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

export default Tramites;