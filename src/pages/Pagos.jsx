import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Pagos() {
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
                Gestión de pagos tributarios
              </h1>

              <p>
                Consulta información relacionada con
                los pagos y obligaciones tributarias
                registrados en JadeControl.
              </p>

            </div>


            <div className="tramites-grid">

              {/* PAGOS REGISTRADOS */}
              <article className="tarjeta-tramite">

                <div className="tarjeta-icon">
                  $
                </div>

                <h2>
                  Pagos registrados
                </h2>

                <p>
                  Consulta los pagos registrados
                  dentro del sistema.
                </p>

                <a href="/declaraciones">
                  Ver declaraciones →
                </a>

              </article>


              {/* OBLIGACIONES */}
              <article className="tarjeta-tramite">

                <div className="tarjeta-icon">
                  ✓
                </div>

                <h2>
                  Obligaciones tributarias
                </h2>

                <p>
                  Consulta información relacionada
                  con tus obligaciones tributarias.
                </p>

                <a href="/tramites">
                  Ver trámites →
                </a>

              </article>


              {/* CONTRIBUYENTES */}
              <article className="tarjeta-tramite">

                <div className="tarjeta-icon">
                  ▣
                </div>

                <h2>
                  Información del contribuyente
                </h2>

                <p>
                  Consulta información relacionada
                  con los contribuyentes registrados.
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

export default Pagos;