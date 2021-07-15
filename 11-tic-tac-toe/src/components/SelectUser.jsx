import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setX, setO } from "../redux/playerActions";

const SelectUser = () => {
  const users = useSelector((state) => state.users);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>X: {players.x}</li>
        <li>O: {players.o}</li>
      </ul>

      <table>
        {users.map((u) => (
          <tr>
            <td>{u.username}</td>
            <td>{u.partidas}</td>
            <td>
              <button onClick={() => dispatch(setX(u.username))}>X</button>
              <button onClick={() => dispatch(setO(u.username))}>O</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default SelectUser;
