import React, { useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import api from "../../services/api";

import logoFacebook from "../../assets/logos_facebook.svg";
import logoGoogle from "../../assets/logos_google.svg";

import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    try {
      api.get("/profile").then((response) => {
        const info = response.data;
        info.users.map((user)=>{
          setUsers(user)
        })
      });
    } catch {
      window.alert("Oh no");
    }
  }, []);

  function auth(e){
    e.preventDefault();
    console.log(users)
    if(users.email === email || users.password === password){
      navigate(`/user`, {detail: users.id})
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

          <button className="a" onClick={auth}>Entrar</button>
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
