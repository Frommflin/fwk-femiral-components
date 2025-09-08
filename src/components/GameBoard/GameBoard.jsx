import React from "react";
import styles from "./GameBoard.module.css";

export const GameBoard = ({ size = 7 }) => {
  return (
    <div className={styles.gameBoard}>
      {Array.from({ length: size * size }, (_, i) => (
        <div key={i} className={styles.cell}></div>
      ))}
    </div>
  );
};

export default GameBoard;
