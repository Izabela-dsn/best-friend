import EventCard from "../../components/cardsEvents/event";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const User = () => {
  return (
    <div className="profile">
      <Header />
      <main>
        <h1>Olá, nome</h1>
        <div className="pets">
          <div className="pet">
            <button>
              <p></p>
            </button>
          </div>
        </div>
        <section className="about">
          <div className="about-basic-information">
            <p className="pet-name"></p>
            <p className="pet-years"></p>
            <p className="pet-weight"></p>
          </div>

          <div className="medical-history">
            <button className="history vaccines-medicines">
                <ul>
                    <EventCard typeOfHistory="Clinica" names="Nome do Médico" time="12 de Julho" />
                </ul>
            </button>
            <button className="history exams"></button>
            <button className="history veterinary"></button>
            <button className="history surgeries"></button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default User;