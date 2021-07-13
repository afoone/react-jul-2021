import React from "react";
import { Link } from "react-router-dom";

const PatientRow = ({ patient, deleteElement }) => {
  return (
    <tr role="patient-row">
      <td>
        <Link to={`/patients/${patient.id}`}> {patient.id}</Link>
      </td>
      <td>{patient.name}</td>
      <td>{patient.diagnostico}</td>
      <td>
        <button
          onClick={() => deleteElement(patient.id)}
          className="ui button red mini"
        >
          Borrar
        </button>
        <Link to={`/patients/${patient.id}/edit`}>
            <button className="ui button green mini">Editar</button>
        </Link>
      </td>
    </tr>
  );
};

const PatientsTable = ({ patients, deleteElement }) => {
  console.log("patients", patients);
  return (
    <div className="patients-table">
      <table className="ui table celled striped">
        <thead>
          <th>ID</th>
          <th>Nombre</th>
          <th>Diagnóstico</th>
          <th></th>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <PatientRow patient={patient} deleteElement={deleteElement} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsTable;
