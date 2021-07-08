import React, { useState } from "react";
import styles from "./Busqueda.module.css";

const Busqueda = ({changeSearch}) => {
  // Crear un estado para el contenido de la búsqueda
  const [query, setQuery] = useState("");

  // cada vez que cambie el contenido del input en el dom, debemos cambiar el estado
  // el estado es el valor real en el input

  const onChangeSearchHandler = (e) => setQuery(e.target.value);

  return (
    <div className={styles.container}>
      <div className="ui  action input">
        <input
          type="text"
          value={query}
          onChange={onChangeSearchHandler}
          placeholder="Buscar..."
        />
        <button onClick={()=> changeSearch(query)} className="ui primary button">Buscar</button>
      </div>
    </div>
  );
};

export default Busqueda;
