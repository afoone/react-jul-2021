import React, { useState } from "react";
import { addUser } from "../redux/usersAction";
import { useDispatch } from "react-redux";
import axios from "axios";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const guardar = () => {
    dispatch(addUser(username));
  };

  return (
    <div className="ui form">
      <div className="ui field">
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <button onClick={guardar}>Guardar</button>
    </div>
  );
};

export default AddUserForm;
