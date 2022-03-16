import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import "../../assets/global.css";
import "./style.css";
import banner from "../../assets/banner.svg";
import arrow from "../../assets/arrow.svg";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <div id="home">
          <div className="home-card">
            <h2 className="title">Um espaço acolhedor</h2>
            <p>Uma plataforma para acompanhamento médico do seu animalzinho.</p>
            <p>Fique em dia com a saúde do seu melhor amigo.</p>

            <div className="buttons">
              <a href="/login" className="btn">
                ENTRAR
              </a>
              <a href="/" className="btn">
                CADASTRAR
              </a>
            </div>
          </div>
          <div className="home-banner">
            <img
              src={banner}
              alt="Um gato olhando para o cachorro e o cachorro olhando para frente."
            />
          </div>
        </div>

        <div id="benefit">
          <h2 className="title">Benefícios</h2>
          <div className="benefits grid">
            <section className="services">
              <div className="benefit-one-image"></div>
              <p>Feito para todos que tem um melhor amigo ou vários.</p>
            </section>
            <section className="services">
              <p>
                Se programe colocando as datas mais importantes do seu bichinho.
              </p>
              <div className="benefit-two-image"></div>
            </section>
            <section className="services">
              <div className="benefit-three-image"></div>
              <p>
                Tenha um lugar para anotar todos os compromissos que o seu pet
                tem.
              </p>
            </section>

            <section className="service-free">
              <p>E o melhor</p>
              <div className="benefit-four-image"></div>
            </section>
          </div>
        </div>

        <div id="know-more">
          <h2 className="title">Saiba Mais</h2>
          <p>Ficou interessado ?</p>
          <p>
            Se inscreva na nossa newsletter animal <br/> para ficar sabendo sobre as
            novidades por aqui  <br/> e muito mais!
          </p>
          <form action="mailto:izabeladasilva10@gmail.com">
            <fieldset>
              <label htmlFor="input-email">Email</label>
              <input
                type="email"
                name="email"
                id="input-email"
                placeholder="exemplo@email.com"
              />
            </fieldset>
            <button type="submit">
              <img src={arrow} alt="enviar email" />
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
