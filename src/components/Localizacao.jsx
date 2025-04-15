import React from "react";
import "./Localizacao.css"; // se quiser criar um CSS separado

const Localizacao = () => {
  return (
    <section className="localizacao">
      <h2>Localização</h2>
      <p>Largo de Santana, 88, Sala 12 - Rio Vermelho, Salvador - BA</p>

 <div className="map-container">
        <iframe
          title="Mapa estúdio C'ink"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.9607934349216!2d-38.4916157!3d-13.0119222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035172ef56c9%3A0xc081a8dbab190e01!2sLargo%20de%20Santana%2C%2088%20-%20Rio%20Vermelho%2C%20Salvador%20-%20BA%2C%2041950-650!5e0!3m2!1spt-BR!2sbr!4v1744744133865!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      <a
        className="botao-maps"
        href="https://maps.app.goo.gl/3Nvrr9GyRSHxkrXT7"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir no Google Maps
      </a>
    </section>
  );
};
export default Localizacao;
