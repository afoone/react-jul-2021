import axios from "axios";

export const ADD_USER = "add-user";
export const ADD_PARTIDA = "add-partida";
export const GET_USERS = "get-users";

export const addUser = (username) => (dispatch) => {
  axios
    .post("http://localhost:4000/users", {
      username: username,
      partidas: 0,
    })
    .then((res) => dispatch(addUserRedux(res.data.username)));
};

export const addUserRedux = (username) => ({
  type: ADD_USER,
  payload: {
    username,
    partidas: 0,
  },
});

export const addPartida = (username) => ({
  type: ADD_PARTIDA,
  payload: username,
});

export const getUsers = () => (dispatch) => {
  axios
    .get("http://localhost:4000/users")
    .then((res) => dispatch(getUsersRedux(res.data)));
};

export const getUsersRedux = (users) => ({ type: GET_USERS, payload: users });
