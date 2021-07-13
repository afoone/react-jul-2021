import authReducer, { initialstate } from "./authReducer";
// {
//   user: undefined;
// }

test("si no le paso ninguna acción entonces devuelveme el estado como estaba", () => {
  expect(authReducer({ user: { pepito: "pepito" } })).toEqual({
    user: { pepito: "pepito" },
  });
});

test("si no le paso ningun estado quiero que me devuelva el estado inical", () => {
  expect(authReducer()).toEqual(initialstate);
});

test("si le hago un login quiero que el usuario sea el nuevo", () => {
  expect(
    authReducer(
      {
        user: undefined,
      },
      {
        type: "login",
        payload: {
          username: "afoone",
          name: "Alfonso Tienda",
        },
      }
    )
  ).toEqual({
    user: {
      username: "afoone",
      name: "Alfonso Tienda",
    },
  });
});

test("si le hago un logout quiero que el usuario se borre", () => {
  expect(
    authReducer(
      { user: { username: "loquesea" } },
      {
        type: "logout",
      }
    )).toEqual({
      user: undefined,
    })
  
});
