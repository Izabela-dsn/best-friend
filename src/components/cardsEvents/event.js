import api from "../../services/api";
import "./style.css";

const EventCard = (props) => {
  function handleDelete(id, category) {
    category = props.category;
    id = props.id;
    console.log(category)
    if (category === "medicineVaccine") {
      console.log(id)
      try {
        var response = api.delete(`/medicineVaccine/${id}`, {
          headers: { "Content-Type": "application/json" },
        });
        console.log(response.data.status);
        window.alert("Sucesso! Atualize a página.");
      } catch {
        window.alert("Não foi posssivel apagar tente novamente mais tarde.");
      }
    }
    if (category === "exams") {
      try {
        var response = api.delete(`/exams/${id}`, {
          headers: { "Content-Type": "application/json" },
        });
        console.log(response.data.status);
        window.alert("Sucesso! Atualize a página.");
      } catch {
        window.alert("Não foi posssivel apagar tente novamente mais tarde.");
      }
    }
    if (category === "veterinary") {
      try {
        var response = api.delete(`/veterinary/${id}`, {
          headers: { "Content-Type": "application/json" },
        });
        //console.log(response.data);
        window.alert("Sucesso! Atualize a página.");
      } catch {
        window.alert("Não foi posssivel apagar tente novamente mais tarde.");
      }
    }
    if (category === "surgeries") {
      try {
        var response = api.delete(`/surgeries/${id}`, {
          headers: { "Content-Type": "application/json" },
        });
        //console.log(response.data);
        window.alert("Sucesso! Atualize a página.");
      } catch {
        window.alert("Não foi posssivel apagar tente novamente mais tarde.");
      }
    }
  }

  function handleEdit() {
    console.log("Quero editar essa merda");
  }

  return (
    <li className="cardEvent">
      <div className="names">
        <span>{props.locationNameOrType}</span>
        <p>{props.names}</p>
      </div>
      <div className="time">
        <p>{props.time}</p>
      </div>
      <button className="btn delete" onClick={handleDelete}>
        Apagar
      </button>
      <button className="btn edit" onClick={handleEdit}>
        Editar
      </button>
    </li>
  );
};

export default EventCard;
