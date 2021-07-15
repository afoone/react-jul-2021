import playersReducer from "./playersReducer";
import { setX } from "./playerActions";

test("setea x", () => {
  expect(playersReducer({ x: "pepe", y: "juan" }, setX("alfonso"))).toEqual({
    x: "alfonso",
    y: "juan",
  });
});
