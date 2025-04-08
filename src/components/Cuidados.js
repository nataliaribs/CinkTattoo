import React from 'react';
import './Cuidados.css';

function Cuidados() {
  return (
    <section className="cuidados">
      <h2>Cuidados com a tatuagem</h2>
      <div className="cuidados-texto">
        <h3>Antes da sessão</h3>
        <ul>
          <li>Hidrate bem a pele nos dias anteriores.</li>
          <li>Evite exposição ao sol.</li>
          <li>Durma bem e alimente-se.</li>
        </ul>

        <h3>Após a sessão</h3>
        <ul>
          <li>Lave a tatuagem com sabão neutro e seque com papel toalha.</li>
          <li>Aplique pomada cicatrizante recomendada.  </li>
          <li>Não usar protetor solar durante cicatrização</li>
          <li>Evite sol, piscina e mar por pelo menos 30 dias.</li>
          <li>Não coçar ou arrancar casquinhas.</li>
          <li>Evitar exercícios físicos nos 3 pimeiros dias</li>
        </ul>
      </div>
    </section>
  );
}

export default Cuidados;
