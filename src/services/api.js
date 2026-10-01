const API_EXTERNA =
  "https://api.frankfurter.dev/v2/rate/usd/eur";

/**
 * Obtiene el tipo de cambio USD → EUR
 */
export async function obtenerTipoCambio() {

  const respuesta =
    await fetch(API_EXTERNA);

  if (!respuesta.ok) {

    throw new Error(
      `Error ${respuesta.status}: ${respuesta.statusText}`
    );

  }

  const datos =
    await respuesta.json();

  if (
    !datos ||
    datos.rate === undefined ||
    datos.rate === null
  ) {

    throw new Error(
      "La API no devolvió un tipo de cambio válido."
    );

  }

  return datos;
}