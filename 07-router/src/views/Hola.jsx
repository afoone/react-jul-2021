import React, { useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";

const Hola = () => {
  const { nombre } = useParams();
  //const history = useHistory();

  const [redirect, setRedirect] = useState(false);

  return (
    <div>
      <h1>hola {nombre}</h1>
      {/* <button onClick={() => history.push("/")}>go to home</button> */}
      <button onClick={() => setRedirect(true)} >a casa</button>
      {redirect && <Redirect to="/"></Redirect>}
    </div>
  );
};

export default Hola;
