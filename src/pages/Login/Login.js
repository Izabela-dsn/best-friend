import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <header>  
        <Link to="/">X</Link>
      </header>
      <form action="">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>

        <label htmlFor="password">Senha</label>
        <input type="password" id="password"/>
        <a href="/" className="forgot-password" disabled>Esqueci minha senha</a>

        <button type="submit">Entrar</button>
        <Link to="/user">Entrar</Link>

      </form>
      <div className="signIn-socialMedia">
        <h2>Entrar pelo</h2>
        <div className="buttons-socialMedia">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src="" alt="" />Facebook</a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="" alt="" />Google</a>
        </div>
      </div>

    </div>
  );
};

export default Login;
