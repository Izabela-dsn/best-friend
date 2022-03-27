import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import api from "../../services/api";

import logoFacebook from "../../assets/logos_facebook.svg";
import logoGoogle from "../../assets/logos_google.svg";

import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
 
  async function handleLogin(e){
    e.preventDefault();
    try {
      api.get("/users").then((response) => {
        var info = response.data;
        info.map((user)=>{
          //console.log(user.id)
          if(user.email === email || user.password === password){
            navigate('/user', {state:{detail: `${user.id}`}})
          }
          return true;
        })
      });
    } catch {
      window.alert("Oh no");
    }
  }

  
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
            <input type="email" id="email" placeholder="exemplo@email.com" onChange={(e)=>{setEmail(e.target.value)}}/>
          </fieldset>

          <fieldset>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
          </fieldset>
          <a href="/" className="forgot-password">
            Esqueci minha senha
          </a>

          <button className="a" onClick={handleLogin}>Entrar</button>
          {/*<Link to="#" className="a" >
            Entrar </Link>*/}
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
