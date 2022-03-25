import { useEffect, useState } from "react";
import api from "../../services/api";

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
  let texto = `{
    "nome": "Fulano",
    "idade": 90,
    "filmes_preferidos": [ "Pulp Fiction", "Clube da Luta" ],
    "contatos": {
        "telefone": "(11) 91111-2222",
        "emails": [ "fulano@gmail.com", "fulano@yahoo.com" ]
    }
}`;
  // se o seu browser não suporta a template string acima, use a linha abaixo
  //let texto = '{ "nome": "Fulano", "idade": 90, "filmes_preferidos": [ "Pulp Fiction", "Clube da Luta" ], "contatos": { "telefone": "(11) 91111-2222", "emails": [ "fulano@gmail.com", "fulano@yahoo.com" ] } }';

  let json = JSON.parse(texto);
  // imprimir nome
  //console.log(json.nome);
  // imprimir filmes
  //json.filmes_preferidos.forEach((filme) => console.log(filme));
  // imprimir contatos
  for (let [tipo, contato] of Object.entries(json.contatos)) {
    //console.log(tipo, "=", Array.isArray(contato) ? contato.join() : contato);
  }

  ////////////////////////////////////////////////////////////
  useEffect(() => {
    buscarProfile();
  }, []);

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
  const petProfile = [];

  async function buscarProfile() {
    try {
      api.get("/profile").then((response) => {
        const info = response.data;
        setUsersProfile(info.users);
      });
    } catch {
      window.alert("Oh no");
    }
  }

  try{
    for(let [index, user] of Object.entries(usersProfile)){
      user.pet.forEach(element => {
        petProfile.push(element)
      });
    }
  }catch
  {
    window.alert("Não foi possivel recuperar informações do banco")
  }
  //console.log(petProfile)

  return (
    <div className="profile">
      <Header />
      <main>
        {usersProfile
          ? usersProfile.map((user) => <h1 key={user.id}>Olá, {user.name}</h1>)
          : null}
        <div className="pets">
          <div className="pet">
            {petProfile
              ? petProfile.map((pet) => (
                  <button key={pet.id}>
                    <p>{pet.name}</p>
                  </button>
                ))
              : null}
          </div>
          <div className="pet">
            <button>
              <p>Adicionar mais um pet</p>
            </button>
          </div>
        </div>

        <section className="about">
          <hr />
          {petProfile.map(pet => (
              <div key={pet.id} className="about-basic-information">
                <p className="pet-name">Nome - {pet.name}</p>
                <p className="pet-years">Idade - {pet.years} anos</p>
                <p className="pet-weight">Peso - {pet.weight} KG</p>
              </div>
            ) 
          )}

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
                  <ul className="list">
                    {petProfile ? petProfile.map(pet=>{
                        <EventCard></EventCard>
                    }): <p>Não foi possivel carregas os dados</p>}
                  </ul>
                  <button
                    className="btnForms"
                    onClick={() => setOpenForms("formMedicineVaccine")}
                  >
                    Adicionar
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
                  <ul className="list">
                    <EventCard
                      locationNameOrType="Clinica Vet"
                      names="Ultrasom"
                      time="12 de Julho"
                    ></EventCard>
                    <EventCard
                      locationNameOrType="Clinica Vet"
                      names="Ultrasom"
                      time="12 de Julho"
                    ></EventCard>
                    <EventCard
                      locationNameOrType="Clinica Vet"
                      names="Ultrasom"
                      time="12 de Julho"
                    ></EventCard>
                    <EventCard
                      locationNameOrType="Clinica Vet"
                      names="Ultrasom"
                      time="12 de Julho"
                    ></EventCard>
                    <EventCard
                      locationNameOrType="Clinica Vet"
                      names="Ultrasom"
                      time="12 de Julho"
                    ></EventCard>
                    <EventCard
                      locationNameOrType="Clinica Vet"
                      names="Ultrasom"
                      time="12 de Julho"
                    ></EventCard>
                    <EventCard
                      locationNameOrType="Clinica Vet"
                      names="Ultrasom"
                      time="12 de Julho"
                    ></EventCard>
                  </ul>
                  <button
                    className="btnForms"
                    onClick={() => setOpenForms("formExams")}
                  >
                    Adicionar
                  </button>
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
                  <ul className="list"></ul>
                  <button
                    className="btnForms"
                    onClick={() => setOpenForms("formVeterinary")}
                  >
                    Adicionar
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
                <ul className="list"></ul>
                <button
                  className="btnForms"
                  onClick={() => setOpenForms("formSurgeries")}
                >
                  Adicionar
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
