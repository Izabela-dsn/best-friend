import { useEffect, useState } from "react";
import api from "../../services/api";
import { useLocation } from "react-router-dom";

import EventCard from "../../components/cardsEvents/event";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import vacinasRemediosIcon from "../../assets/vacinaRemedios.svg";
import examIcon from "../../assets/estetoscopio.svg";
import vetIcon from "../../assets/clinica.svg";
import cirurgiaIcon from "../../assets/cirurgias.svg";
import CardInsertData from "../../components/cardInsertData";
import "./style.css";

const User = () => {
  const location = useLocation();
  const idUser = parseInt(location.state.detail) || {};
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
  const [usersProfile, setUsersProfile] = useState([]);
  const [petProfile, setPetProfile] = useState([]);
  var [medicalHistoryVaccineMedicine, setMedicalHistoryVaccineMedicine] =
    useState([]);
  const [medicalHistoryExams, setMedicalHistoryExams] = useState([]);
  const [medicalHistoryVet, setMedicalHistoryVet] = useState([]);
  const [medicalHistorySurgeries, setMedicalHistorySurgeries] = useState([]);
  const [checkedPet, setCheckedPet] = useState(false);
  const [pets, setPet] = useState("");

  useEffect(() => {
    getInformation();
  }, [checkedPet]);

  function getInformation() {
    try {
      api.get("/users").then((response) => {
        const info = response.data;
        info.map((user) => {
          if (user.id === idUser) {
            setUsersProfile(user);
          }
        });
      });

      api.get("/pets").then((response) => {
        const infoPets = response.data;
        infoPets.map((pet) => {
          if (pet.ownerId === idUser) {
            setCheckedPet(true);
          }
        });
        if (checkedPet === true) {
          setPetProfile(infoPets);
        }
      });
    } catch {
      window.alert("Oh no");
    }
  }

  //console.log(petProfile);
  function handleMedVac() {
    setCategories("medicineVaccine");
    try {
      api.get("/medicineVaccine").then((response) => {
        setMedicalHistoryVaccineMedicine(response.data);
      });
    } catch {
      window.alert("nooooo");
    }
  }

  function handleExams() {
    setCategories("exams");
    try {
      api.get("/exams").then((response) => {
        setMedicalHistoryExams(response.data);
      });
    } catch {
      window.alert("nooooo");
    }
  }

  function handleVet() {
    setCategories("veterinary");
    try {
      api.get("/veterinary").then((response) => {
        //console.log(response);
        setMedicalHistoryVet(response.data);
      });
    } catch (error) {
      window.alert("nooooo");
    }
  }

  function handleSurgeries() {
    setCategories("surgeries");
    try {
      api.get("/surgeries").then((response) => {
        console.log(response);
        setMedicalHistorySurgeries(response.data);
      });
    } catch (error) {
      window.alert("nooooo");
    }
  }
  return (
    <div className="profile">
      <Header />
      <main>
        {usersProfile ? (
          <h1 id={usersProfile.id}>Olá, {usersProfile.name}</h1>
        ) : null}
        <div className="pets">
          <div className="pet">
            {petProfile
              ? petProfile.map((pet) => {
                  return (
                    <button
                      key={pet.id}
                      id={pet.id}
                      onClick={() => setPet(pet.name)}
                    >
                      <p>{pet.name}</p>
                    </button>
                  );
                })
              : null}
            <button>
              <p>Adicionar mais um pet</p>
            </button>
          </div>
        </div>

        {petProfile ? (
          petProfile.map((pet) => {
            if (pet.ownerId === usersProfile.id && pets === pet.name) {
              return (
                <section className="about" key={pet.id}>
                  <hr />
                  <div className="about-basic-information">
                    <p className="pet-name">Nome - {pet.name}</p>
                    <p className="pet-years">Idade - {pet.years} anos</p>
                    <p className="pet-weight">Peso - {pet.weight} KG</p>
                  </div>

                  <div className="medical-history">
                    <section>
                      <button
                        className="history vaccines-medicines"
                        onClick={handleMedVac}
                      >
                        <img src={vacinasRemediosIcon} alt="Vacina e remédio" />
                        Vacinas/Remédios
                      </button>

                      {categories === "medicineVaccine" && (
                        <div className="vaccines-medicines">
                          <ul className="list">
                            {medicalHistoryVaccineMedicine ? (
                              medicalHistoryVaccineMedicine.map((card) => {
                                if (card.idPet === pet.id) {
                                  return (
                                    <EventCard
                                      key={card.id}
                                      locationNameOrType={card.typeOf}
                                      names={card.name}
                                      time={card.date}
                                    ></EventCard>
                                  );
                                }
                              })
                            ) : (
                              <p>Não foi possível carregas os dados</p>
                            )}
                          </ul>
                          <button
                            className="btnForms"
                            onClick={() => setOpenForms("formMedicineVaccine")}
                          >
                            Adicionar
                          </button>
                          {openForms === "formMedicineVaccine" && (
                            <CardInsertData type={categories} idPet={pet.id} />
                          )}
                        </div>
                      )}
                    </section>

                    <section>
                      <button className="history exams" onClick={handleExams}>
                        <img src={examIcon} alt="Exames" />
                        Exames
                      </button>

                      {categories === "exams" && (
                        <div className="exams">
                          <ul className="list">
                            {medicalHistoryExams ? (
                              medicalHistoryExams.map((card) => {
                                if (card.idPet === pet.id) {
                                  return (
                                    <EventCard
                                      key={card.id}
                                      locationNameOrType={card.place}
                                      names={card.nameExam}
                                      time={card.date}
                                    ></EventCard>
                                  );
                                }
                              })
                            ) : (
                              <p>Não foi possível carregas os dados</p>
                            )}
                          </ul>
                          <button
                            className="btnForms"
                            onClick={() => setOpenForms("formExams")}
                          >
                            Adicionar
                          </button>
                          {openForms === "formExams" && (
                            <CardInsertData type={categories} idPet={pet.id} />
                          )}
                        </div>
                      )}
                    </section>

                    <section>
                      <button
                        className="history veterinary"
                        onClick={handleVet}
                      >
                        <img src={vetIcon} alt="Ida ao veterinário" />
                        Idas ao veterinário(a)
                      </button>

                      {categories === "veterinary" && (
                        <div className="veterinary">
                          <ul className="list">
                            {medicalHistoryVet ? (
                              medicalHistoryVet.map((card) => {
                                if (card.idPet === pet.id) {
                                  return (
                                    <EventCard
                                      key={card.id}
                                      locationNameOrType={card.place}
                                      names={card.nameVet}
                                      time={card.date}
                                    ></EventCard>
                                  );
                                }
                              })
                            ) : (
                              <p>Não foi possível carregas os dados</p>
                            )}
                          </ul>
                          <button
                            className="btnForms"
                            onClick={() => setOpenForms("formVeterinary")}
                          >
                            Adicionar
                          </button>
                          {openForms === "formVeterinary" && (
                            <CardInsertData type={categories} idPet={pet.id} />
                          )}
                        </div>
                      )}
                    </section>

                    <section>
                      <button
                        className="history surgeries"
                        onClick={handleSurgeries}
                      >
                        <img src={cirurgiaIcon} alt="cirurgia" />
                        Cirurgias
                      </button>

                      {categories === "surgeries" && (
                        <div className="surgeries">
                          <ul className="list">
                            {medicalHistorySurgeries ? (
                              medicalHistorySurgeries.map((card) => {
                                if (card.idPet === pet.id) {
                                  return (
                                    <EventCard
                                      key={card.id}
                                      locationNameOrType={card.placeAndDoctor}
                                      names={card.nameSurgery}
                                      time={card.date}
                                    ></EventCard>
                                  );
                                }
                              })
                            ) : (
                              <p>Não foi possível carregas os dados</p>
                            )}
                          </ul>
                          <button
                            className="btnForms"
                            onClick={() => setOpenForms("formSurgeries")}
                          >
                            Adicionar
                          </button>
                          {openForms === "formSurgeries" && (
                            <CardInsertData type={categories} idPet={pet.id} />
                          )}
                        </div>
                      )}
                    </section>
                  </div>
                </section>
              );
            }
          })
        ) : (
          <h2>Não foi possível carregar</h2>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default User;
