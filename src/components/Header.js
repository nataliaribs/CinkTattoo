import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="header">
      <div className="container-header">
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/imagem/logos/logoColorida.png`}
            alt="Logo Estúdio Cink"
          />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav ${menuAberto ? 'ativo' : ''}`}>
          <a href="#portfolio" onClick={toggleMenu}>Tatuadoras</a>
          <a href="#agendamento" onClick={toggleMenu}>Agendamento</a>
          <a href="#loja" onClick={toggleMenu}>Loja</a>
          <a href="#cuidados" onClick={toggleMenu}>Cuidados</a>
          <a href="#formulario" onClick={toggleMenu}>Formulário</a>
          <a href="#localizacao" onClick={toggleMenu}>Localização</a>
          <a
            className="insta-link"
            href="https://www.instagram.com/cink.tattoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
            width="64" height="64" src="https://img.icons8.com/nolan/64/instagram-new.png" alt="instagram-new"/>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
