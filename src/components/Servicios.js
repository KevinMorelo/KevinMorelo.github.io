import React from "react";
import "./Servicios.css";

const servicios = [
  {
    title: "Psicoterapia Individual",
    description:
      "Ayudo a mis pacientes a superar ansiedad, estrés, depresión y otros trastornos emocionales.",
    image: "/images/cabecera.jpg",
  },
  {
    title: "Evaluación Psicológica",
    description:
      "Realizo evaluaciones psicológicas utilizando herramientas estandarizadas para mejorar el bienestar emocional.",
    image: "/images/cabecera2.jpg",
  },
  {
    title: "Asesoría en Psicología Organizacional",
    description:
      "Brindo asesoría para mejorar la comunicación y el bienestar en organizaciones laborales.",
    image: "/images/cabecera3.jpg",
  },
  {
    title: "Terapia de Pareja",
    description:
      "Ayudo a las parejas a mejorar su comunicación y resolución de conflictos.",
    image: "/images/cabecera4.jpg",
  },
  {
    title: "Psicología Infantil",
    description:
      "Proporciono herramientas para ayudar a los niños a superar sus dificultades emocionales y conductuales.",
    image: "/images/cabecera5.jpg",
  },
];

function Servicios() {
  return (
    <section id="servicios" className="section-service">
      <h1>Mis Servicios</h1>
      <div className="services-grid">
        {servicios.map((servicio, index) => (
          <div key={index} className="service-card">
            <img
              src={servicio.image}
              alt={servicio.title}
              className="service-image"
            />
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
            <a href="#mas-info">MÁS INFORMACIÓN</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
