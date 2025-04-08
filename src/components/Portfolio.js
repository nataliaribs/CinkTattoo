import React from 'react';
import './Portfolio.css';

const tatuadoras = [
  {
    nome: 'Rêka Bittencourt',
    fotoPerfil: `${process.env.PUBLIC_URL}/imagem/tatuadoras/reka.png`,
    fotoTatuagem: `${process.env.PUBLIC_URL}/imagem/tattoos/reka.jpg`,
  },
  {
    nome: 'Gabriela Droguet',
    fotoPerfil: `${process.env.PUBLIC_URL}/imagem/tatuadoras/gab.jpg`,
    fotoTatuagem: `${process.env.PUBLIC_URL}/imagem/tattoos/gab.jpg`,
  },
  {
    nome: 'Milena Correia',
    fotoPerfil: `${process.env.PUBLIC_URL}/imagem/tatuadoras/milena.jpg`,
    fotoTatuagem: `${process.env.PUBLIC_URL}/imagem/tattoos/milena.jpg`,
  },
  {
    nome: 'Natália Ribeiro',
    fotoPerfil: `${process.env.PUBLIC_URL}/imagem/tatuadoras/nrtattoo.jpg`,
    fotoTatuagem: `${process.env.PUBLIC_URL}/imagem/tattoos/natalia.jpg`,
  },
  {
    nome: 'Hannah Macêdo',
    fotoPerfil: `${process.env.PUBLIC_URL}/imagem/tatuadoras/hannah.jpg`,
    fotoTatuagem: `${process.env.PUBLIC_URL}/imagem/tattoos/hannah.jpg`,
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfólio</h2>
      <div className="tatuadoras-grid">
        {tatuadoras.map((tatuadora, index) => (
          <div className="card" key={index}>
            <div className="image-container">
              <img
                className="foto-perfil"
                src={tatuadora.fotoPerfil}
                alt={`Foto de ${tatuadora.nome}`}
              />
              <img
                className="foto-tatuagem"
                src={tatuadora.fotoTatuagem}
                alt={`Tatuagem feita por ${tatuadora.nome}`}
              />
            </div>
            <p>{tatuadora.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
