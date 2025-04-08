import React from 'react';
import './Agendamento.css';

const tatuadoras = [
  {
    nome: 'Rêka Bittencourt',
    estilo: 'geométrico, fineline, ornamental',
    whatsapp: '5571982440033'
  },
  {
    nome: 'Gabriela Droguett',
    estilo: 'especialista em escritas             .',
    whatsapp: '5571991797921',
  },
  {
    nome: 'Milena Correia',
    estilo: 'colorido, blackwork, realismo e fineline',
    whatsapp: '5571992469494',
  },
  {
    nome: 'Natália Ribeiro',
    estilo: 'fineline, blackwork e ornamental',
    whatsapp: '5571999089903',
  },
  {
    nome: 'Hannah Macêdo',
    estilo: 'oldschool, blackwork, fineline',
    whatsapp: '5571999196670',
  },
];

export default function Agendamento() {
  return (
    <section id="agendamento" className="agendamento">
      <h2>Agende sua Tatuagem</h2>
      <div className="cards">
        {tatuadoras.map((tatuadora, index) => (
          <div key={index} className="card">
            <h3>{tatuadora.nome}</h3>
            <p>{tatuadora.estilo}</p>
            <a
              href={`https://wa.me/${tatuadora.whatsapp}?text=Olá!%20Gostaria%20de%20agendar%20uma%20tatuagem%20com%20${encodeURIComponent(tatuadora.nome)}.`}
              target="_blank"
              rel="noreferrer"
              className="botao"
            >
              Falar no WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
