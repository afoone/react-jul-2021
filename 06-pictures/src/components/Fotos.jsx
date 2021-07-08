import React, { useState } from "react";
import Busqueda from "./Busqueda";
import FotosGrid from "./FotosGrid";

const Fotos = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="fotos">
      <Busqueda changeSearch={(nuevaquery) => setSearchQuery(nuevaquery)} />
      <FotosGrid search={searchQuery} />
    </div>
  );
};

export default Fotos;
