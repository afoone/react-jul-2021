import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import playersReducer from "./playersReducer";
import usersReducer from "./usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  players: playersReducer,
  users: usersReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
