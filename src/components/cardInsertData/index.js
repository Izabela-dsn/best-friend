const CardInsertData = (props) => {
  return (
    <div>
      {props.type === "medicineVaccine" && (
        <form>
          <fieldset>
            <label htmlFor="type">Escolha:</label>
            <select name="Tipo" id="type">
              <option value="Vacina">Vacina</option>
              <option value="Remedio">Remédio</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="nameVacRem">Nome</label>
            <input type="text" name="nameVacRem" id="nameVacRem" />
          </fieldset>

          <fieldset>
            <label htmlFor="time">Data</label>
            <input type="date" name="Data" id="time" />
          </fieldset>
        </form>
      )}

      {props.type === "exams" && (
        <form>
          <fieldset>
            <label htmlFor="location">Local</label>
            <input type="text" name="" id="location" />
          </fieldset>

          <fieldset>
            <label htmlFor="nameExam">Nome do exame</label>
            <input type="text" name="nameExam" id="nameExam" />
          </fieldset>

          <fieldset>
            <label htmlFor="time">Data</label>
            <input type="date" name="" id="time" />
          </fieldset>
        </form>
      )}
      {props.type === "veterinary" && (
        <form>
          <fieldset>
            <label htmlFor="clinic">Local</label>
            <input type="text" name="clinic" id="clinic" />
          </fieldset>

          <fieldset>
            <label htmlFor="time">Data</label>
            <input type="date" name="time" id="time" />
          </fieldset>

          <fieldset>
            <label htmlFor="veterinarian">Nome do veterinário(a)</label>
            <input type="text" name="veterinarian" id="veterinarian" />
          </fieldset>
        </form>
      )}
      {props.type === "surgeries" && (
        <form>
          <fieldset>
            <label htmlFor="clinicDocVet">Clinica e veterinário(a) reponsável</label>
            <input type="text" name="clinicDocVet" id="clinicDocVet" />
          </fieldset>

          <fieldset>
            <label htmlFor="">Nome do Procedimento</label>
            <input type="text" name="" id="" />
          </fieldset>

          <fieldset>
            <label htmlFor="time">Data</label>
            <input type="date" name="time" id="time" />
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default CardInsertData;
