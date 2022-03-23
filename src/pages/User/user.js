import { useState } from "react";
import EventCard from "../../components/cardsEvents/event";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./style.css";
import vacinasRemediosIcon from "../../assets/vacinaRemedios.svg";
import examIcon from "../../assets/estetoscopio.svg";
import vetIcon from "../../assets/clinica.svg";
import cirurgiaIcon from "../../assets/cirurgias.svg";
import CardInsertData from "../../components/cardInsertData";

const User = () => {
  const [categories, setCategories] = useState(
    " ",
    "medicineVaccine",
    "exams",
    "veterinary",
    "surgeries"
  );

  const [openForms, setOpenForms] = useState(
    " ",
    "formMedicineVaccine",
    "formExams",
    "formVeterinary",
    "formSurgeries"
  );

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
            <section>
              <button
                className="history vaccines-medicines"
                onClick={() => setCategories("medicineVaccine")}
              >
                <img src={vacinasRemediosIcon} alt="Vacina e remédio" />
                Vacinas/Remédios
              </button>

              {categories === "medicineVaccine" && (
                <div className="vaccines-medicines">
                  <ul></ul>
                  <button onClick={() => setOpenForms("formMedicineVaccine")}>
                    Add
                  </button>
                  {openForms === "formMedicineVaccine" && (
                    <CardInsertData type={categories} />
                  )}
                </div>
              )}
            </section>

            <section>
              <button
                className="history exams"
                onClick={() => setCategories("exams")}
              >
                <img src={examIcon} />
                Exames
              </button>

              {categories === "exams" && (
                <div className="exams">
                  <ul></ul>
                  <button onClick={() => setOpenForms("formExams")}>Add</button>
                  {openForms === "formExams" && (
                    <CardInsertData type={categories} />
                  )}
                </div>
              )}
            </section>

            <section>
              <button
                className="history veterinary"
                onClick={() => setCategories("veterinary")}
              >
                <img src={vetIcon} />
                Idas ao veterinário(a)
              </button>

              {categories === "veterinary" && (
                <div className="veterinary">
                  <ul></ul>
                  <button onClick={() => setOpenForms("formVeterinary")}>
                    Add
                  </button>
                  {openForms === "formVeterinary" && (
                    <CardInsertData type={categories} />
                  )}
                </div>
              )}
            </section>

            <button
              className="history surgeries"
              onClick={() => setCategories("surgeries")}
            >
              <img src={cirurgiaIcon} />
              Cirurgias
            </button>

            {categories === "surgeries" && (
              <div className="surgeries">
                <ul></ul>
                <button onClick={() => setOpenForms("formSurgeries")}>
                    Add
                  </button>
                  {openForms === "formSurgeries" && (
                    <CardInsertData type={categories} />
                  )}
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
