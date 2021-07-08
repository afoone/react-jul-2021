import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./FotosGrid.module.css";

let page = 2;

const FotosGrid = ({ search }) => {
  // crear el estado para almacenar las fotos
  const [fotos, setFotos] = useState([]);

  // cuando el componente esté preparado me traigo las fotos y las meto en el estado
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?client_id=dqVBy5xEILipqgxwJOsuuFBpvKJEB6-P40pWBGQKgiQ&page=1&query=" +
          search
      )
      .then((res) => setFotos(res.data.results));
  }, [search]);

  const addMoreResults = () => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?client_id=dqVBy5xEILipqgxwJOsuuFBpvKJEB6-P40pWBGQKgiQ&page=" +
          page +
          "&query=" +
          search
      )
      .then((res) => {
        setFotos([...fotos, ...res.data.results]);
        page++;
      });
  };

  return (
    <div>
      <div className={styles.container}>
        {fotos.map((foto) => {
          const width = foto.width > foto.height ? 300 : 150;
          return (
            <div key={foto.id}>
              <img
                className={styles.image}
                style={{
                  width,
                }}
                src={foto.urls.thumb}
                alt={foto.alt_description}
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={addMoreResults}
        className="primary basic ui button fluid"
      >
        --- más resultados ---
      </button>
    </div>
  );
};

export default FotosGrid;
