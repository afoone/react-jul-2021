export const suma = (a = 0, b = 0) => a + b;

export const saldo = (movimientos, saldoInicial = 0) => {
  return movimientos.reduce((acc, curr) => {
    switch (curr.tipo) {
      case "deposito":
        return acc + curr.importe;
      case "retirada":
        return acc - curr.importe;
      default:
        return acc;
    }
  }, saldoInicial);
};

// {
//     importe: 2000,
//     tipo: "deposito"
// },
