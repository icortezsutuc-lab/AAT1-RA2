function EstadoPeticion({
  estado,
  mensaje,
  onReintentar
}) {

  // ESTADO: CARGANDO
  if (estado === "cargando") {
    return (
      <div className="estado-api cargando">

        <div className="spinner"></div>

        <h3>
          Consultando información...
        </h3>

        <p>
          Estamos obteniendo el tipo de cambio.
        </p>

      </div>
    );
  }

  // ESTADO: ERROR
  if (estado === "error") {
    return (
      <div className="estado-api error">

        <div className="estado-icon">
          ⚠
        </div>

        <h3>
          No se pudo obtener la información
        </h3>

        <p>
          {mensaje ||
            "Ocurrió un problema al consultar la API."}
        </p>

        <button
          type="button"
          onClick={onReintentar}
          className="btn-reintentar"
        >
          Reintentar
        </button>

      </div>
    );
  }

  // ESTADO: VACÍO
  if (estado === "vacio") {
    return (
      <div className="estado-api vacio">

        <div className="estado-icon">
          ○
        </div>

        <h3>
          No hay información disponible
        </h3>

        <p>
          La API no devolvió resultados para esta consulta.
        </p>

      </div>
    );
  }

  // ESTADO: ÉXITO
  return null;
}

export default EstadoPeticion;