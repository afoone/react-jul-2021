import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenidos a la aplicación de pacientes</h1>
      <ul>
        <li>
          <Link to="/patients">Pacientes</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
