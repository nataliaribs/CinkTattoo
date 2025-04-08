import React from 'react';
import './Formulario.css';

function Formulario() {
  return (
    <section className="formulario">
      <h2>Formulário de Anamnese - Estúdio C'INK</h2>
      <form>
        <label>Nome completo:</label>
        <input type="text" name="nome" required />

        <label>Data de nascimento:</label>
        <input type="date" name="dataNascimento" required />

        <label>Telefone para contato:</label>
        <input type="tel" name="telefone" required />

        <label>Tem alergias ou problemas de saúde?</label>
        <textarea name="alergias" rows="3" />

        <label>Está fazendo uso de medicamentos?</label>
        <textarea name="medicamentos" rows="3" />

        <label>Qual tatuadora te atende?</label>
        <select name="tatuadora">
          <option>Rêka Bittencourt</option>
          <option>Gabriela Droguet</option>
          <option>Milena Correia</option>
          <option>Natália Ribeiro</option>
          <option>Hannah Macêdo</option>
        </select>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Formulario;
