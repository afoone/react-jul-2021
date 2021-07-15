// Un reducer es una función que recoje un estado (estado del store) y una acción y devuelve un nuevo estado
import {LOGIN, LOGOUT} from './authActions'

export const initialstate = {
  user: undefined,
};

const authReducer = (state = initialstate, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload,
      };
    case LOGOUT:
      return {
        user: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;

// {
//     type: login,
//     payload: {
//         username: dkdsfj,
//         name: PEpito
//     }
// }
