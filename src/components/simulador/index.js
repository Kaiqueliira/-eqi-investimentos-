import React from "react";

import "./styles.scss";

function Simulador() {
  return (
    <section>
      <h2>Simulador</h2>
      <form className="form">
        <div className="column">
          <div className="row">
            <div className="">
              <span>Rendimento</span>
              <span>!</span>
            </div>
            <div className="selection-button rendiment">
              <button className="isActive"> Bruto</button>
              <button> Líquido</button>
            </div>
          </div>
          <div className="row">
            <label>
              Aporte Incial
              <input type="text"></input>
            </label>
          </div>
          <div className="row">
            <label>
              Prazo (em meses)
              <input type="text"></input>
            </label>
          </div>
          <div className="row">
            <label>
              IPCA (ao ano)
              <input type="text"></input>
            </label>
          </div>
          <div className="row">
            <button>Limpar campos</button>
          </div>
        </div>
        <div className="column">
          <div className="row">
            <div className="">
              <span>Tipos de indexação</span>
              <span>!</span>
            </div>
            <div className="selection-button ">
              <button> PRÉ</button>
              <button className="isActive"> POS</button>
              <button> FIXADO</button>
            </div>
          </div>
          <div className="row">
            <label>
              Aporte Mensal
              <input type="text"></input>
            </label>
          </div>
          <div className="row">
            <label>
              Rentabilidade
              <input type="text"></input>
            </label>
          </div>
          <div className="row">
            <label>
              CDI (ao ano)
              <input type="text"></input>
            </label>
          </div>
          <div className="row">
            <button>Simular</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Simulador;
