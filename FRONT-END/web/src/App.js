import React, { useState } from "react";
import "./global.css";
import "./App.css";
/*
Componente: Bloco isolado de HTML, CSS e JS, o qual não intefere no funciona
no restante da aplicação.

Propriedade: Informações que um componente PAI passa para o componente FILHO

Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
*/
function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form action="" className="">
          <div className="input-block">
            <label htmlFor="">Usuário do GiHub</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div className="input-block">
            <label htmlFor="">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
