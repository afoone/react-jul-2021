export const createBoard = () =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
    return {
      id: n,
    };
  });

export const getRow = (n) => {
  return Math.floor((n - 1) / 3) + 1;
};

export const getColumn = (n) => {
  return ((n - 1) % 3) + 1;
};

export const winner = (board, lastMovement) => {
  const row = getRow(lastMovement);
  const column = getColumn(lastMovement);

  const player = board.filter((i) => i.id === lastMovement)[0]?.player;
  const columnOk = board
    .filter((i) => getColumn(i.id) === column)
    .reduce((acc, curr) => acc && curr.player === player, true);
  const rowOk = board
    .filter((i) => getRow(i.id) === row)
    .reduce((acc, curr) => acc && curr.player === player, true);
  let diagOk = false;
  if (
    lastMovement === 1 ||
    lastMovement === 5 ||
    lastMovement === 9 ||
    lastMovement === 3 ||
    lastMovement === 7
  ) {
    console.log(
      lastMovement,
      board,
      board.filter((i) => i.id === 1)[0].player === player &&
        board.filter((i) => i.id === 5)[0].player === player &&
        board.filter((i) => i.id === 9)[0].player === player
    );
    console.log("diagok", diagOk);
    diagOk =
      diagOk ||
      (board.filter((i) => i.id === 3)[0].player === player &&
        board.filter((i) => i.id === 5)[0].player === player &&
        board.filter((i) => i.id === 7)[0].player === player);
    console.log("diagok", diagOk);
  }
  return columnOk || rowOk  ? player : undefined;
};
