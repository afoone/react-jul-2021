import React, { useEffect, useState } from "react";
import PatientsTable from "../components/PatientsTable";
import { Link } from "react-router-dom";
import axios from "axios";

const PatientListView = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/patients")
      .then((res) => setPatients(res.data));
  }, []);

  const deletePatient = async (id) => {
    // borrar el paciente de la db
    await axios.delete(`http://localhost:4000/patients/${id}`);
    // borrar el paciente dmi lista
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <div>
      <h2>Lista de pacientes</h2>
      <div style={{ float: "right" }}>
        <Link to="/patients/new">
          <button className="ui button green">Nuevo paciente</button>
        </Link>
      </div>
      <PatientsTable patients={patients} deleteElement={deletePatient} />
    </div>
  );
};

export default PatientListView;
