import { getRow, getColumn, winner } from "./boardPresenter";

test("calcula correctamente la fila", () => {
  expect(getRow(1)).toBe(1);
  expect(getRow(2)).toBe(1);
  expect(getRow(6)).toBe(2);
  expect(getRow(7)).toBe(3);
  expect(getRow(9)).toBe(3);
});

test("calcula correctamente la columna", () => {
  expect(getColumn(1)).toBe(1);
  expect(getColumn(2)).toBe(2);
  expect(getColumn(4)).toBe(1);
  expect(getColumn(6)).toBe(3);
  expect(getColumn(9)).toBe(3);
});

// test("calcula el ganador", () => {
//   expect(
//     winner(
//       [
//         { id: 1, player: "x" },
//         { id: 2, player: "o" },
//         { id: 3 },
//         { id: 4 },
//         { id: 5, player: "o" },
//         { id: 6, player: "x" },
//         { id: 7 },
//         { id: 8, player: "o" },
//         { id: 9, player: "x" },
//       ],
//       5
//     )
//   ).toBe("o");
//   expect(
//     winner(
//       [
//         { id: 1, player: "x" },
//         { id: 2 },
//         { id: 3 },
//         { id: 4 },
//         { id: 5, player: "o" },
//         { id: 6, player: "x" },
//         { id: 7 },
//         { id: 8, player: "o" },
//         { id: 9, player: "x" },
//       ],
//       5
//     )
//   ).toBeFalsy;
//   expect(
//     winner(
//       [
//         { id: 1 },
//         { id: 2 },
//         { id: 3 },
//         { id: 4, player: "x" },
//         { id: 5, player: "x" },
//         { id: 6, player: "x" },
//         { id: 7 },
//         { id: 8 },
//         { id: 9 },
//       ],
//       6
//     )
//   ).toBeFalsy;
//   expect(
//     winner(
//       [
//         { id: 1, player: "x" },
//         { id: 2 },
//         { id: 3 },
//         { id: 4 },
//         { id: 5, player: "x" },
//         { id: 6 },
//         { id: 7 },
//         { id: 8 },
//         { id: 9, player: "x" },
//       ],
//       9
//     )
//   ).toBe("x");
//   expect(
//     winner(
//       [
//         { id: 1 },
//         { id: 2 },
//         { id: 3, player: "x" },
//         { id: 4 },
//         { id: 5, player: "x" },
//         { id: 6 },
//         { id: 7, player: "x" },
//         { id: 8 },
//         { id: 9 },
//       ],
//       9
//     )
//   ).toBe("x");
// });
