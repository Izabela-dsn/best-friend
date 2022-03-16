import React from 'react'; 
import '../../assets/global.css'
import './style.css'
import imgBtn from "../../assets/pata-login.svg"


const Header = () =>{
    return(
        <header>
            <h1 className="logo">Melhor Amigo</h1>
            <nav>
              <a href="#benefit" className="benefits link">Benefícios</a>
              <a href="#know-more" className="more link">Saiba Mais</a>
              <a href="/login" className="login-button">
                <img src={imgBtn} alt="Login" />
                <span>Login</span>
              </a>
            </nav>
        </header>
    )
}

export default Header;