import { ADD_USER, ADD_PARTIDA, GET_USERS } from "./usersAction";

const initialState = [];
const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case ADD_PARTIDA:
      const user = state.filter((i) => i.username === action.payload)[0];
      console.log("user", user);
      return [
        ...state.filter((i) => i.username !== action.payload),
        {
          username: user.username,
          partidas: user.partidas + 1,
        },
      ];
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
