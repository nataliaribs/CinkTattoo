import React, { useEffect } from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Agendamento from "./components/Agendamento";
import Loja from "./components/Loja";
import Formulario from "./components/Formulario";
import Cuidados from "./components/Cuidados";
import Footer from "./components/Footer";
import { initSmoothScroll } from './smoothScroll.js';  // Certifique-se de criar o arquivo smoothScroll.js
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
      <Portfolio />
      <Agendamento />
      <Loja />
      <Formulario />
      <Cuidados />
      <Footer />
    </div>
  );
}

export default App
