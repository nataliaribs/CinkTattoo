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
        <a href="#portfolio">Tatuadoras</a>
        <a href="#agendamento">Agendamento</a>
        <a href="#loja">Loja</a>
        <a href="#cuidados">Cuidados</a>
        <a href="#formulario">Formulário</a>
        <a href="#localizacao">Localização</a>

        {/* Ícone do Instagram */}
        
        <a
  className="insta-link"
  href="https://instagram.com/cink_estudio"
  target="_blank"
  rel="noopener noreferrer"
>
<img width="50" height="50" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/>
</a>

      </nav>
    </header>
  );
}

export default Header;
