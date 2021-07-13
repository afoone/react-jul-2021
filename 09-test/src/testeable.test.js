import { suma, saldo } from "./testeable";

test("suma correctamente dos numeros naturales", () => {
  expect(suma(4, 3)).toBe(7);
  expect(suma(7, 8)).toBe(15);
});

test("suma correctamente dos numeros enteros", () => {
  expect(suma(4, -3)).toBe(1);
  expect(suma(7, -8)).toBe(-1);
});

test("que gestione los nulos", () => {
  expect(suma(4)).toBe(4);
  expect(suma(4, null)).toBe(4);
  expect(suma()).toBe(0);
});

/// Función saldo

// {
//     fechaMovimiento: "30/7/2021",
//     importe: 3000,
//     tipo: "deposito",
//     concepto: "nomima de febrero"
// }

const movimientos = [
  {
    importe: 3000,
    tipo: "deposito",
  },
  {
    importe: 2000,
    tipo: "deposito",
  },
  {
    importe: 1000,
    tipo: "retirada",
  },
  {
    importe: 2000,
    tipo: "retirada",
  },
  {
    importe: 500,
    tipo: "deposito",
  },
];

const movimientos_con_malos = [
  {
    importe: 3000,
    tipo: "deposito",
  },
  {
    importe: 2000,
    tipo: "deposito",
  },
  {
    importe: 1000,
    tipo: "xxxx",
  },
  {
    importe: 2000,
    tipo: "yyyy",
  },
  {
    importe: 500,
    tipo: "deposito",
  },
];

describe("funcion saldo", () => {
  test("calcula correctamente el saldo", () => {
    expect(saldo(movimientos, 0)).toBe(2500);
    expect(saldo(movimientos, 2000)).toBe(4500);
  });

  test("si no le pasamos saldo inicial era 0", () => {
    expect(saldo(movimientos)).toBe(2500);
  });

  test("si no es depósito o retirada un movimiento, no lo cuenta para el cálculo", () => {
    expect(saldo(movimientos_con_malos)).toBe(5500);
  });
});
