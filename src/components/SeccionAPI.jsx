import { useEffect, useState } from "react";

import {
  obtenerTipoCambio
} from "../services/api";

import EstadoPeticion from "./EstadoPeticion";

function SeccionAPI() {

  const [estado, setEstado] =
    useState("cargando");

  const [datos, setDatos] =
    useState(null);

  const [mensajeError, setMensajeError] =
    useState("");

  const cargarTipoCambio = async () => {

    setEstado("cargando");
    setDatos(null);
    setMensajeError("");

    try {

      const resultado =
        await obtenerTipoCambio();

      if (
        !resultado ||
        resultado.rate === undefined ||
        resultado.rate === null
      ) {

        setEstado("vacio");

        return;
      }

      setDatos(resultado);

      setEstado("exito");

    } catch (error) {

      console.error(
        "Error al consultar API:",
        error
      );

      setMensajeError(
        error.message ||
        "No fue posible consultar la información."
      );

      setEstado("error");

    } finally {

      console.log(
        "Petición a la API finalizada."
      );

    }
  };

  useEffect(() => {

    cargarTipoCambio();

  }, []);

  return (

    <section
      id="api"
      className="seccion-api"
    >

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            Información en vivo
          </span>

          <h2>
            Información económica actualizada
          </h2>

          <p>
            Consulta información de tipos de cambio
            obtenida directamente desde una API externa.
          </p>

        </div>

        <div className="api-card">

          {estado === "cargando" && (

            <EstadoPeticion
              estado="cargando"
            />

          )}

          {estado === "error" && (

            <EstadoPeticion
              estado="error"
              mensaje={mensajeError}
              onReintentar={cargarTipoCambio}
            />

          )}

          {estado === "vacio" && (

            <EstadoPeticion
              estado="vacio"
            />

          )}

          {estado === "exito" &&
            datos && (

              <div className="api-exito">

                <div className="api-icon">
                  $
                </div>

                <div className="api-info">

                  <span className="api-label">
                    Tipo de cambio
                  </span>

                  <h3>

                    1 USD =
                    {" "}
                    {Number(datos.rate).toFixed(4)}
                    {" "}
                    EUR

                  </h3>

                  <p>
                    Información obtenida en vivo
                    mediante una API externa.
                  </p>

                  <small>

                    Fecha de referencia:
                    {" "}
                    {datos.date}

                  </small>

                </div>

              </div>

            )}

        </div>

      </div>

    </section>

  );
}

export default SeccionAPI;