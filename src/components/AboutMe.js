import React from "react";
import "./AboutMe.css";
import logo from "../assets/logo-black-120.svg";

function AboutMe() {
  return (
    <section className="about-section">
      {/* Navbar */}
      <div className="navbarAbout">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo Nataly Palacios" />
          </a>
        </div>
        <div className="nav-links">
          <a href="/about">Sobre mí</a>
          <a href="#acompanamiento">Acompañamiento</a>
          <a href="#contacto" className="btn-contacto">
            Contáctame
          </a>
        </div>
      </div>

      {/* Encabezado como en la imagen */}
      <div className="about-header">
        <h1 className="about-main-title">Sobre</h1>
        <h1 className="highlight">Nataly Palacios</h1>
        <blockquote className="about-quote">
          «No puedes volver atrás y cambiar el principio, pero puedes comenzar
          donde estás y cambiar el final.»
        </blockquote>
      </div>

      {/* Contenedor flex para el texto y la imagen */}
      <div className="about-content">
        <div className="about-text">
          <h2>Psicóloga, Coach y Formadora</h2>
          <p>
            Durante más de 8 años, he acompañado emocionalmente a personas que
            buscan sanar, conocerse y crecer. Mi vocación me ha llevado a
            formarme en diferentes enfoques terapéuticos y a conectar con cada
            historia de forma empática y humana.
          </p>
          <p>
            Mi enfoque integra herramientas de la psicología clínica y
            humanista, adaptadas a las necesidades únicas de cada persona.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/profesional.jpg" alt="Nataly Palacios" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
