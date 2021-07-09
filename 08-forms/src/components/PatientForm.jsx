import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PatientForm = ({ patient }) => {
  const history = useHistory();

  // const onSubmit = () => {
  //     console.log("submitted");
  //     const obj = {
  //       name,
  //       diagnostico,
  //     };
  //     console.log(obj)
  //     axios.post(
  //         "http://localhost:4000/patients",
  //         obj
  //     ).then(
  //         history.push("/patients")
  //     )

  //   };

  const onSubmit = async () => {
    if (!validate()) return;
    if (patient) {
      // estoy en modo edición, tengo que hacer un put
      await axios.put(`http://localhost:4000/patients/${patient.id}`, {
        name,
        diagnostico,
      });
    } else {
      // es nuevo por lo que tengo que hacer un post
      await axios.post("http://localhost:4000/patients", {
        name,
        diagnostico,
      });
    }

    history.push("/patients");
  };

  const [name, setName] = useState("");
  const [diagnostico, setDiagnostico] = useState("");

  // cuando cargue tengo que "popular" los inputs
  useEffect(() => {
    if (patient) {
      setName(patient.name);
      setDiagnostico(patient.diagnostico);
    }
  }, [patient]);

  const validate = () => {
    return name && diagnostico;
  };

  return (
    <div class="ui form">
      <div class="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="field">
        <label>Diagnostico</label>
        <input
          type="text"
          name="diagnostico"
          placeholder="Diagnostico"
          value={diagnostico}
          onChange={(e) => setDiagnostico(e.target.value)}
        />
      </div>
      <button onClick={onSubmit} class="ui primary button" type="submit">
        Guardar
      </button>
    </div>
  );
};

export default PatientForm;
