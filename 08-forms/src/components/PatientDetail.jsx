import React from "react";
import { Link } from "react-router-dom";

const PatientDetail = ({ patient }) => {
  return (
    <div className="patient-detail" style={{ marginTop: "3rem" }}>
      <div class="ui card">
        <div class="content">
          <div class="header">{patient.name}</div>
          <div class="meta">
            <span class="date">{ `Número de paciente ${patient.id}` }</span>
          </div>
        </div>
        <div class="extra content">
          <div>
            <i class="doctor icon"></i>
            {patient.diagnostico}
          </div>
        </div>
      </div>
      <Link to="/patients">
        <button className="ui button basic primary">
          {"< Volver a la lista"}
        </button>
      </Link>
    </div>
  );
};

export default PatientDetail;
