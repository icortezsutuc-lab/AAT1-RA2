import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";

function Contacto() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <main>

        <section
          id="contacto"
          className="cta-final"
        >

          <div className="container">

            <div className="section-header">

              <span className="section-badge">
                JadeControl
              </span>

              <h1>
                Contacta con nosotros
              </h1>

              <p>
                Si necesitas información sobre trámites,
                declaraciones o pagos tributarios,
                puedes enviarnos tu consulta.
              </p>

            </div>

            <Formulario />

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </>
  );
}

export default Contacto;