import React from "react";
import styles from "./Box.module.css";
import { getColumn, getRow } from "./boardPresenter";

const Box = ({ box, fulfill }) => {
  const onClickHandler = () => {
    if (!box.player) fulfill(box.id);
  };

  return (
    <div className={styles.box} onClick={onClickHandler}>
      <div className={styles.player}>{box.player}</div>
    </div>
  );
};

export default Box;
