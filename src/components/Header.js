import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/imagem/logos/logoColorida.png`} alt="Logo Estúdio Cink" />
      </div>
      <nav className="nav">
        <a href="#portfolio">Portfólio</a>
        <a href="#agendamento">Agendamento</a>
        <a href="#loja">Loja</a>
        <a href="#cuidados">Cuidados</a>
        <a href="#formulario">Formulário</a>
      </nav>
    </header>
  );
}

export default Header;
