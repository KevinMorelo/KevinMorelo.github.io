import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo-120.svg"; // Ruta del logo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
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
      <div className="hero-container">
        <div className="hero-image"></div>
        <div className="hero-text">
          <h1>Bienvenido a mi espacio de atención psicológica</h1>
          <p>
            Mi objetivo es acompañarte en tu proceso de autoconocimiento y
            bienestar emocional. Juntos, exploraremos herramientas y estrategias
            para promover tu salud mental y calidad de vida.
          </p>
          <a href="#agendar-cita" className="btn-agendar">
            AGENDA TU CITA{" "}
          </a>{" "}
        </div>
      </div>
    </header>
  );
};

export default Header;
