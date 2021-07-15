import { SET_X, SET_Y } from "./playerActions";

const playersReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_X:
      return {
        ...state,
        x: action.payload,
      };

    case SET_Y:
      return {
        ...state,
        o: action.payload,
      };

    default:
      return state;
  }
};

export default playersReducer
