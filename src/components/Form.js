import React from 'react';
import './Form.css';

function Form() {
  return (
    <section className="form-section" id="contacto">
      <h2>¿Alguna duda?</h2>
      <p className="sub">Estaré encantada de ayudarte</p>
      <form className="form-container">
        <div className="form-row">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Email" required />
        </div>
        <textarea placeholder="Mensaje" rows="5" required></textarea>
        <button type="submit">ENVIAR</button>
        <p className="legal">
          Trataremos tus datos para responder tu consulta. Si aceptas, recibirás comunicaciones comerciales
          sobre nuestros servicios. Puedes ejercer tus derechos según nuestra <a href="#">Política de privacidad</a>.
        </p>
      </form>
    </section>
  );
}

export default Form;
