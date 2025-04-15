import React, { useEffect } from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Agendamento from "./components/Agendamento";
import Loja from "./components/Loja";
import Formulario from "./components/Formulario";
import Cuidados from "./components/Cuidados";
import Footer from "./components/Footer";
import Localizacao from "./components/Localizacao";
import { initSmoothScroll } from './smoothScroll.js';

import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <div>
      <Header />

      {/* Todas as seções com os IDs corretos para scroll suave */}
      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="agendamento">
        <Agendamento />
      </section>

      <section id="loja">
        <Loja />
      </section>

      <section id="formulario">
        <Formulario />
      </section>

      <section id="cuidados">
        <Cuidados />
      </section>

      <section id="localizacao">
        <Localizacao />
      </section>

      <Footer />
    </div>
  );
}

export default App;
