import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Beneficios from "../components/Beneficios";
import TarjetaTramite from "../components/TarjetaTramite";
import SeccionAPI from "../components/SeccionAPI";
import Formulario from "../components/Formulario";
import Footer from "../components/Footer";

function Inicio() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}
      <Navbar />

      <main>

        {/* =========================
            1. HERO / PORTADA
        ========================= */}
        <Hero />


        {/* =========================
            2. PROPUESTA DE VALOR
        ========================= */}
        <Beneficios />


        {/* =========================
            3. TRÁMITES Y SERVICIOS
        ========================= */}
        <section
          id="tramites"
          className="tramites"
        >
          <div className="container">

            <div className="section-header">

              <span className="section-badge">
                Servicios
              </span>

              <h2>
                Trámites y servicios
              </h2>

              <p>
                Consulta y gestiona los principales
                servicios disponibles en JadeControl
                desde un solo lugar.
              </p>

            </div>


            <div className="tramites-grid">

              <TarjetaTramite
                titulo="Contribuyentes"
                descripcion="Administra y consulta la información de los contribuyentes registrados."
                enlace="/contribuyentes"
              />

              <TarjetaTramite
                titulo="Declaraciones"
                descripcion="Gestiona y consulta la información relacionada con tus declaraciones tributarias."
                enlace="/declaraciones"
              />

              <TarjetaTramite
                titulo="Pagos"
                descripcion="Consulta la información relacionada con los pagos registrados."
                enlace="/pagos"
              />

            </div>

          </div>
        </section>


        {/* =========================
            4. SECCIÓN DINÁMICA CON API
        ========================= */}
        <SeccionAPI />


        {/* =========================
            5. CONFIANZA
        ========================= */}
        <section
          id="confianza"
          className="confianza"
        >
          <div className="container">

            <div className="section-header">

              <span className="section-badge">
                Confianza
              </span>

              <h2>
                Una gestión más organizada
              </h2>

              <p>
                JadeControl centraliza información
                relacionada con trámites, declaraciones
                y pagos tributarios en un solo lugar.
              </p>

            </div>


            <div className="beneficios-grid">

              <article className="beneficio-card">

                <div className="beneficio-icon">
                  ✓
                </div>

                <h3>
                  Información organizada
                </h3>

                <p>
                  Consulta información relacionada con
                  tus trámites desde una estructura
                  centralizada.
                </p>

              </article>


              <article className="beneficio-card">

                <div className="beneficio-icon">
                  ▣
                </div>

                <h3>
                  Acceso centralizado
                </h3>

                <p>
                  Encuentra diferentes servicios y
                  módulos de JadeControl desde un
                  mismo sistema.
                </p>

              </article>


              <article className="beneficio-card">

                <div className="beneficio-icon">
                  →
                </div>

                <h3>
                  Consulta sencilla
                </h3>

                <p>
                  Navega por las diferentes opciones
                  para consultar información de forma
                  clara y organizada.
                </p>

              </article>

            </div>

          </div>
        </section>


        {/* =========================
            6. CTA FINAL
        ========================= */}
        <section
          id="contacto"
          className="cta-final"
        >
          <div className="container">

            <span className="section-badge">
              Comienza ahora
            </span>

            <h2>
              ¿Necesitas realizar un trámite?
            </h2>

            <p>
              Utiliza JadeControl para consultar
              información y gestionar tus trámites
              desde un solo lugar.
            </p>

            <Formulario />

          </div>
        </section>

      </main>


      {/* =========================
          7. FOOTER
      ========================= */}
      <Footer />

    </>
  );
}

export default Inicio;