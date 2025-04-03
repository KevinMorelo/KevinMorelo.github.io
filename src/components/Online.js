import React from 'react';
import './Online.css';

function Online() {
  return (
    <section className="online-section" id="online">
      <div className="online-content">
        <div className="online-text">
          <h2>Terapia online</h2>
          <p>
            «La distancia nos acerca». La terapia online permite que continúes con tus sesiones por motivos
            de viajes, cambio de residencia o falta de tiempo, permitiéndote de forma cómoda y flexible seguir
            con tu proceso de desarrollo.
          </p>
          <p className="nota">
            *Se pueden llevar a cabo a través de cualquiera de las plataformas existentes para videoconferencia.
          </p>
          <a href="#contact" className="online-button">SOLICITAR INFORMACIÓN</a>
        </div>
        <div className="online-image">
        <img src="/images/online1.jpg" alt="Nataly Palacios" />
        </div>
      </div>
    </section>
  );
}

export default Online;
