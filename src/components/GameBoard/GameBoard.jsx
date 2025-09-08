import React from "react";
import styles from "./GameBoard.module.css";

export const GameBoard = ({ label }) => {
  return <div className={styles.gameBoard}>{label}</div>;
};

export default GameBoard;
