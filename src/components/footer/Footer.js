import githubImg from "../../assets/git.svg";
import instagramImg from "../../assets/instagram.svg";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media-name">
        <p>Melhor Amigo</p>
        <div className="social-media-icons">
          <a href="https://www.instagram.com/iz_abela/">
            <img
              src={instagramImg}
              alt="Ir para Instagram"
              target="_blank"
            ></img>
          </a>
          <a href="https://github.com/Izabela-dsn">
            <img src={githubImg} alt="Ir para Github" target="_blank"></img>
          </a>
        </div>
      </div>
      <div className="rights">
        <p>
          ©All rights reserved - 2022 <br />
          Desenvolvido por Izabela da Silva Neves
        </p>
      </div>
    </div>
  );
};

export default Footer;
