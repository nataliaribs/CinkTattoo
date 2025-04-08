import React, {useEffect} from "react";
import Header from "./components/Header";
import Portfolio from './components/Portfolio';
import Agendamento from "./components/Agendamento";
import Loja from "./components/Loja";
import { initSmoothScroll } from './smoothScroll';
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Formulario from "./components/Formulario";
import Cuidados from "./components/Cuidados";
import Footer from "./components/Footer";

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
      <Footer />
      <Formulario />
      <Cuidados />

    </div>
  );
}

export default App;
;

