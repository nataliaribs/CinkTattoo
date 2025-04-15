import React from 'react';
import './Header.css';
import { FaInstagram } from 'react-icons/fa'; // Ícone do Instagram

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/imagem/logos/logoColorida.png`}
          alt="Logo Estúdio Cink"
        />
      </div>

      <nav className="nav">
        <a href="#portfolio">Portfólio</a>
        <a href="#agendamento">Agendamento</a>
        <a href="#loja">Loja</a>
        <a href="#cuidados">Cuidados</a>
        <a href="#formulario">Formulário</a>
        <a href="#localizacao">Localização</a>

        {/* Ícone do Instagram */}
        <a
          href="https://www.instagram.com/cink.tattoo/#"
          target="_blank"
          rel="noopener noreferrer"
          className="insta-link"
        >
          <FaInstagram size={40} />
        </a>
      </nav>
    </header>
  );
}

export default Header;
