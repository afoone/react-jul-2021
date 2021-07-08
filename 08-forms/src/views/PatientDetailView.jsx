import React, { useEffect, useState } from "react";
import PatientDetail from "../components/PatientDetail";
import { useParams } from "react-router-dom";
import axios from "axios";

const PatientDetailView = () => {
  const [patient, setPatient] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/patients/${id}`)
      .then((res) => setPatient(res.data));
  }, [id]);

  return (
    <div>
      <PatientDetail patient={patient} />
    </div>
  );
};

export default PatientDetailView;
