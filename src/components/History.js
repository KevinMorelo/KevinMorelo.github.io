import React from 'react';
import './History.css';

function History() {
  return (
    <section id="history" className="history-section">
      <div className="history-content">
        <div className="history-text">
          <h2>Psicóloga Psicosocial</h2>
          <h3>Nataly Palacios</h3>
          <p>
            Soy psicóloga clínica con más de 8 años de experiencia en el acompañamiento emocional.
            Ayudo a personas a reconectar con su bienestar interior y a construir herramientas para
            enfrentar los desafíos emocionales de la vida. Mi enfoque es cercano, empático y profesional.
          </p>
          <a href="#ver-mas" className="history-button">VER MÁS</a>
        </div>
        <div className="history-image">
        <img src="/images/profesional.jpg" alt="Nataly Palacios" />
        </div>
      </div>
    </section>
  );
}

export default History;
