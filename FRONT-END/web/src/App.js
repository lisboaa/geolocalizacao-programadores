import React, { useState } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
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
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/36475975?s=460&v=4"
                alt="Douglas Fernando"
              />
              <div className="user-info">
                <strong>Douglas Fernando</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor Junior. Entusiasta de T.I.</p>
            <a href="https://github.com/lisboaa">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/36475975?s=460&v=4"
                alt="Douglas Fernando"
              />
              <div className="user-info">
                <strong>Douglas Fernando</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor Junior. Entusiasta de T.I.</p>
            <a href="https://github.com/lisboaa">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/36475975?s=460&v=4"
                alt="Douglas Fernando"
              />
              <div className="user-info">
                <strong>Douglas Fernando</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor Junior. Entusiasta de T.I.</p>
            <a href="https://github.com/lisboaa">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/36475975?s=460&v=4"
                alt="Douglas Fernando"
              />
              <div className="user-info">
                <strong>Douglas Fernando</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor Junior. Entusiasta de T.I.</p>
            <a href="https://github.com/lisboaa">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
