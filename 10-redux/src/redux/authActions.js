export const LOGIN = "login";
export const LOGOUT = "logout";

export const login = (username, name) => {
  return {
    type: LOGIN,
    payload: {
      username,
      name,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
