import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PatientForm from "../components/PatientForm";
import axios from "axios";

const PatientFormView = () => {
  const { id } = useParams();
  console.log("id pacient", id);
  const [patient, setPatient] = useState();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:4000/patients/${id}`)
        .then((res) => setPatient(res.data));
    }
  }, [id]);

  return (
    <div>
      {patient ? (
        <h1>{`Editar paciente ${patient.name}`}</h1>
      ) : (
        <h1>Nuevo paciente</h1>
      )}
      <PatientForm patient={patient}></PatientForm>
    </div>
  );
};

export default PatientFormView;
