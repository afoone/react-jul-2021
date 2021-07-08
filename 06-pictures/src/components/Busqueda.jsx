import React, {useState} from "react";
import styles from "./Busqueda.module.css";

const Busqueda = () => {


    // Crear un estado para el contenido de la búsqueda
    const [query, setQuery] = useState("beach")


    // cada vez que cambie el contenido del input en el dom, debemos cambiar el estado
    // el estado es el valor real en el input

  return (
    <div className={styles.container}>
      <div className="ui  action input">
        <input type="text" value={query} onChange={e=>setQuery(e.target.value.toUpperCase())} 
            placeholder="Buscar..." />
        <button className="ui primary button">Buscar</button>
      </div>
    </div>
  );
};

export default Busqueda;
