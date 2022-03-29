import { useState } from "react";
import { format, parseISO } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";

import "./style.css"
import api from "../../services/api";

const CardInsertData = (props) => {
  const [typeVacMed, setTypeVacMed] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('')
  const [nameAndLocation, setNameAndLocation] = useState('')

  //transformar date em array = 12 de julho de 2000
  function handleFormattingData(e){
    const dateRaw = e.target.value
    const parsed = parseISO(dateRaw)
    const result = format(parsed, "do 'de' MMMM 'de' yyyy", {locale: ptBR})
    //console.log(result)
    setDate(result)
  }

  function handleSaveInformation(e){
    e.preventDefault();
    if(props.type === "medicineVaccine"){
      var infosVaccineMedicine = {"typeOf": typeVacMed, "name":name, "date": date, "idPet":props.idPet}
      //console.log(infosVaccineMedicine)

      try{
        var response = api.post(`/medicineVaccine`, infosVaccineMedicine,
        {headers:{"Content-Type":"application/json"}});
        //console.log(response.data);
        window.alert("Sucesso! Atualize a página.")
      }
      catch{
        window.alert("Não foi posssivel salvar tente novamente mais tarde.")
      }

    }
    if(props.type === "exams"){
      var infosExams = {"place": location, "nameExam": name, "date": date, "idPet":props.idPet}
      //console.log(infosExams)

      
      try{
        var response = api.post(`/exams`, infosExams,
        {headers:{"Content-Type":"application/json"}});
        //console.log(response.data);
        window.alert("Sucesso! Atualize a página.")
      }
      catch{
        window.alert("Não foi posssivel salvar tente novamente mais tarde.")
      }
    }
    if(props.type === "veterinary"){
      var infosVet = {"place": location, "nameVet": name, "date": date, "idPet":props.idPet}
      //console.log(infosVet)

      
      try{
        var response = api.post(`/veterinary`, infosVet,
        {headers:{"Content-Type":"application/json"}});
        //console.log(response.data);
        window.alert("Sucesso! Atualize a página.")
      }
      catch{
        window.alert("Não foi posssivel salvar tente novamente mais tarde.")
      }
      
    }
    if(props.type === "surgeries"){
      var infosSurg = {"placeAndDoctor": nameAndLocation, "nameSurgery": name, "date": date, "idPet":props.idPet}
      //console.log(infosSurg)
      
      try{
        var response = api.post(`/surgeries`, infosSurg,
        {headers:{"Content-Type":"application/json"}});
        //console.log(response.data);
        window.alert("Sucesso! Atualize a página.")
      }
      catch{
        window.alert("Não foi posssivel salvar tente novamente mais tarde.")
      }

    }
  }

  return (
    <div className="cardsData">
      {props.type === "medicineVaccine" && (
        <form>
          <fieldset>
            <label htmlFor="type">Escolha o tipo:</label>
            <select name="Tipo" id="type" onChange={(e)=>(setTypeVacMed(e.target.value))}>
              <option value=" ">Escolha</option>
              <option value="Vacina">Vacina</option>
              <option value="Remedio">Remédio</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="nameVacRem">Nome da Vacina ou Remédio</label>
            <input type="text" name="nameVacRem" id="nameVacRem" onChange={(e)=>(setName(e.target.value))}/>
          </fieldset>

          <fieldset>
            <label htmlFor="time">Data</label>
            <input type="date" name="Data" id="time" onChange={handleFormattingData} />
          </fieldset>

          <button onClick={handleSaveInformation}>Salvar</button>
        </form>
      )}

      {props.type === "exams" && (
        <form>
          <fieldset>
            <label htmlFor="location">Local</label>
            <input type="text" name="" id="location" onChange={(e)=>(setLocation(e.target.value))}/>
          </fieldset>

          <fieldset>
            <label htmlFor="nameExam">Nome do exame</label>
            <input type="text" name="nameExam" id="nameExam" onChange={(e)=> (setName(e.target.value))}/>
          </fieldset>

          <fieldset>
            <label htmlFor="time">Data</label>
            <input type="date" name="" id="time" onChange={handleFormattingData}/>
          </fieldset>

          <button onClick={handleSaveInformation}>Salvar</button>
          
        </form>
      )}
      {props.type === "veterinary" && (
        <form>
          <fieldset>
            <label htmlFor="clinic">Local</label>
            <input type="text" name="clinic" id="clinic" onChange={(e)=>(setLocation(e.target.value))}/>
          </fieldset>

          <fieldset>
            <label htmlFor="time">Data</label>
            <input type="date" name="time" id="time" onChange={handleFormattingData}/>
          </fieldset>

          <fieldset>
            <label htmlFor="veterinarian">Nome do veterinário(a)</label>
            <input type="text" name="veterinarian" id="veterinarian" onChange={(e)=>(setName(e.target.value))}/>
          </fieldset>

          <button onClick={handleSaveInformation}>Salvar</button>

        </form>
      )}
      {props.type === "surgeries" && (
        <form>
          <fieldset>
            <label htmlFor="clinicDocVet">Clinica e veterinário(a) reponsável</label>
            <input type="text" name="clinicDocVet" id="clinicDocVet" onChange={(e)=>{setNameAndLocation(e.target.value)}}/>
          </fieldset>

          <fieldset>
            <label htmlFor="">Nome do Procedimento</label>
            <input type="text" name="" id="" onChange={(e)=>(setName(e.target.value))}/>
          </fieldset>

          <fieldset>
            <label htmlFor="time">Data</label>
            <input type="date" name="time" id="time" onChange={handleFormattingData}/>
          </fieldset>
          <button onClick={handleSaveInformation}>Salvar</button>
        </form>


      )}
    </div>
  );
};

export default CardInsertData;
