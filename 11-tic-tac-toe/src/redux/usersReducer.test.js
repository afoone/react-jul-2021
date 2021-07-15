import { addPartida, addUserRedux, getUsersRedux } from "./usersAction";
import userReducer from "./usersReducer";

test("si el tipo es desconodico, me devuelve el mismo estado", () => {
  expect(
    userReducer([{ a: 1 }], {
      type: "ksdajflñksdj",
    })
  ).toEqual([{ a: 1 }]);
});

test("añade correctamente", () => {
  expect(userReducer([], addUserRedux("alfonso"))).toEqual([
    {
      username: "alfonso",
      partidas: 0,
    },
  ]);
});

test("añade una partida", () => {
  expect(
    userReducer([{ username: "alfonso", partidas: 5 }], addPartida("alfonso"))
  ).toEqual([
    {
      username: "alfonso",
      partidas: 6,
    },
  ]);
});

test("añade los usuarios al redux correctamente", () => {
  expect(
    userReducer(
      [],
      getUsersRedux([
        {
          username: "alfonso",
          partidas: 6,
        },
        {
          username: "juanita",
          partidas: 17,
        },
      ])
    )
  ).toEqual([
    {
      username: "alfonso",
      partidas: 6,
    },
    {
      username: "juanita",
      partidas: 17,
    },
  ]);
});
