import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-full">
      {/* Logo + nombre */}
      <div className="footer-logo">
        <h2>Nataly Palacios</h2>
        <p>Psicóloga Clínica</p>
      </div>

      {/* Redes sociales centradas */}
      <div className="footer-socials-centered">
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="mailto:contacto@natalypalacios.com"><FaEnvelope /></a>
      </div>

      {/* Pie de página */}
      <div className="footer-copy">
        <p>© 2024 Nataly Palacios. Todos los derechos reservados. | Diseño: <strong>GitGaraje</strong></p>
      </div>
    </footer>
  );
}

export default Footer;
