import { createStore, combineReducers } from "redux";
import playersReducer from "./playersReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  players: playersReducer,
  users: usersReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
