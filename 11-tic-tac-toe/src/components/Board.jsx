import React, { useState } from "react";
import { createBoard, winner } from "./boardPresenter";
import Box from "./Box";
import styles from "./Board.module.css";

let playerOne = true;

const Board = () => {
  console.log(createBoard());
  const [boxes, setBoxes] = useState(createBoard());
  const [winnerPlayer, setWinnerPlayer] = useState();

  const nuevaPartida = () => {
      console.log("nueva partida")
      setBoxes(createBoard())
      setWinnerPlayer(null)
  }

  // tiene que ocurrir cuando un jugador rellena una casilla
  const fulfillBox = (id) => {
    const player = playerOne ? "x" : "o";
    const newState = [...boxes.filter((i) => i.id !== id), { id, player }].sort(
      (a, b) => a.id - b.id
    );
    const ganador = winner(newState, id);
    if (ganador) {
      setWinnerPlayer(ganador);
    }
    setBoxes(newState);
    playerOne = !playerOne;
  };

  return (
    <div>
      {winnerPlayer && (
    <div style={{marginBottom:"4rem"}}>
          <h1>El ganador es {winnerPlayer}</h1>
          <button className="ui button" onClick={nuevaPartida} >Nueva partida</button>
        </div>
      )}

      <div className={styles.board}>
        {boxes.map((i) => (
          <Box key={i.id} box={i} fulfill={fulfillBox}></Box>
        ))}
      </div>
    </div>
  );
};

export default Board;
