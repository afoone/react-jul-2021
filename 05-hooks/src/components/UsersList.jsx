import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const UsersList = () => {
  // Crear un estado para users inicializado a array vacío
  const [users, setUsers] = useState([]);

  // Traernos los datos
  // con axios
  // en el "component did mount????" useEffect ---
  useEffect(() => {
    // nos vamos a por los datos
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []); //variables que, en el caso de ser modificadas se ejecuta este efecto
  // si es un array vacío se ejecuta sólo después de renderizar el componente (una sóla vez)

  // pintar el componente
  return (
    <div>
      {!users.length && <Skeleton count={10} />}
      <table className="ui celled table">
        <thead>
          <tr>
            <th>nombre</th>
            <th>correo-e</th>
            <th>nombre de la empresa</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(
              user => <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
