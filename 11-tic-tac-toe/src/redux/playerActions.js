export const SET_X = "set_x";
export const SET_Y = "set_y";

export const setX = (username) => ({
  type: SET_X,
  payload: username,
});

export const setO = (username) => ({
  type: SET_Y,
  payload: username,
});
