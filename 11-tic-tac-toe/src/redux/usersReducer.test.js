import { addUser, addPartida } from "./usersAction";
import userReducer from "./usersReducer";

test("si el tipo es desconodico, me devuelve el mismo estado", () => {
  expect(
    userReducer([{ a: 1 }], {
      type: "ksdajflñksdj",
    })
  ).toEqual([{ a: 1 }]);
});

test("añade correctamente", () => {
  expect(userReducer([], addUser("alfonso"))).toEqual([
    {
      username: "alfonso",
      partidas: 0
    },
  ]);
});

test ("añade una partida", ()=> {
    expect(
        userReducer(
            [
                {username: "alfonso",
                partidas: 5
                }
            ], 
            addPartida("alfonso")
        )
    ).toEqual(
        [
            {
                username: "alfonso",
                partidas: 6
            }
        ] 
    )
})
