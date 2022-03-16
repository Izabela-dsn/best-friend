import React from "react";
import { Link } from "react-router-dom";

import logoFacebook from '../../assets/logos_facebook.svg'
import logoGoogle from '../../assets/logos_google.svg'

import "./style.css";

const Login = () => {
  return (
    <div className="login">
      <header>
        <Link to="/" className="a">
          Voltar
        </Link>
      </header>
      <main>
        <form className="form-login">
          <h1>Login</h1>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="exemplo@email.com"/>
          </fieldset>

          <fieldset>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
          </fieldset>
          <a href="/" className="forgot-password">
            Esqueci minha senha
          </a>

          <Link to="/user" className="a">Entrar</Link>
        </form>
        <div className="signIn-socialMedia">
          <h2>Entrar pelo</h2>
          <div className="buttons-socialMedia">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoFacebook} alt="Facebook" />
              Facebook
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <img src={logoGoogle} alt="Google" />
              Google
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
