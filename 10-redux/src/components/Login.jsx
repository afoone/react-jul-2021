import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  // recupera la información del estado
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const login = () => {
    // disparar una acción de login

    dispatch({
      type: "login",
      payload: {
        username,
        name,
      },
    });
  };

  return (
    <div className="ui segment">
      <p>Bienvenido {user?.name}</p>
      <div className="ui form">
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="first-name"
            placeholder="Username"
            name={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="first-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
      </div>
      <button className="ui button primary" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
