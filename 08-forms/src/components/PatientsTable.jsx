import React from "react";
import { Link } from "react-router-dom";

const PatientRow = ({ patient }) => {
  return (
    <tr>
      <td>
        <Link to={`/patients/${patient.id}`}> {patient.id}</Link>
      </td>
      <td>{patient.name}</td>
      <td>{patient.diagnostico}</td>
    </tr>
  );
};

const PatientsTable = ({ patients }) => {
  console.log("patients", patients);
  return (
    <div className="patients-table">
      <table className="ui table celled striped">
        <thead>
          <th>ID</th>
          <th>Nombre</th>
          <th>Diagnóstico</th>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <PatientRow patient={patient} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsTable;
