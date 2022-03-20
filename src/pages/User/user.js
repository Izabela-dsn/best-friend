import { useState } from "react";
import EventCard from "../../components/cardsEvents/event";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./style.css";
import vacinasRemediosIcon from "../../assets/vacinaRemedios.svg";
import examIcon from "../../assets/estetoscopio.svg";
import vetIcon from "../../assets/clinica.svg";
import cirurgiaIcon from "../../assets/cirurgias.svg";

const User = () => {
  const [buttons, setButtons] = useState(
    "medicineVaccine",
    "exams",
    "veterinary",
    "surgeries"
  )
  
  //Botões do historico médico
  var viewBtnOne = () => {
    setButtons("medicineVaccine");
  };
  var viewBtnTwo = () => {
    setButtons("exams");
  };
  var viewBtnThree = () => {
    setButtons("veterinary");
  };
  var viewBtnFour = () => {
    setButtons("surgeries");
  };
  

  return (
    <div className="profile">
      <Header />
      <main>
        <h1>Olá, nome</h1>
        <div className="pets">
          <div className="pet">
            <button>
              <p>Nina</p>
            </button>
          </div>
          <div className="pet">
            <button>
              <p>Adicionar mais um pet</p>
            </button>
          </div>
        </div>

       
        <section className="about">
            <hr />
            <div className="about-basic-information">
              <p className="pet-name">Nome - Nina</p>
              <p className="pet-years">Idade - 11 anos</p>
              <p className="pet-weight">Peso - 8 KG</p>
            </div>

            <div className="medical-history">
              <button className="history" onClick={viewBtnOne}>
                <img src={vacinasRemediosIcon} alt="Vacina e remédio" />
                Vacinas/Remédios
              </button>

              {buttons === "medicineVaccine" && (
                <div className="vaccines-medicines">
                  <ul> 
                    
                  </ul>
                </div>
              )}

              <button className="history exams" onClick={viewBtnTwo}>
                <img src={examIcon} />
                Exames
              </button>

              {buttons === "exams" && (
                <div className="exams">
                  <ul></ul>
                </div>
              )}

              <button className="history veterinary" onClick={viewBtnThree}>
                <img src={vetIcon} />
                Idas ao veterinário(a)
              </button>

              {buttons === "veterinary" && (
                <div className="veterinary">
                  <ul></ul>
                </div>
              )}

              <button className="history surgeries" onClick={viewBtnFour}>
                <img src={cirurgiaIcon} />
                Cirurgias
              </button>

              {buttons === "surgeries" && (
                <div className="surgeries">
                  <ul></ul>
                </div>
              )}
            </div>
        </section> 
      
      </main>
      <Footer />
    </div>
  );
};

export default User;
