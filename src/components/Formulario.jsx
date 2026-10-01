function Formulario() {
  const manejarEnvio = (evento) => {
    evento.preventDefault();

    alert(
      "Solicitud enviada correctamente."
    );
  };

  return (
    <form
      className="formulario"
      onSubmit={manejarEnvio}
    >

      <div className="form-group">

        <label htmlFor="nombre">
          Nombre
        </label>

        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Escribe tu nombre"
          required
        />

      </div>

      <div className="form-group">

        <label htmlFor="correo">
          Correo electrónico
        </label>

        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="correo@ejemplo.com"
          required
        />

      </div>

      <div className="form-group">

        <label htmlFor="mensaje">
          ¿Qué trámite necesitas?
        </label>

        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu consulta"
          rows="5"
          required
        ></textarea>

      </div>

      <button
        type="submit"
        className="btn-primary"
      >
        Enviar solicitud
      </button>

    </form>
  );
}

export default Formulario;