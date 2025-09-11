import React from "react";
import styles from "./GameBoard.module.css";
import GameTile from "../GameTile/GameTile";

export const GameBoard = ({
  size = 7,
  coloredCells = [{ i: 5, color: "white" }],
}) => {
  return (
    <div className={styles.gameBoard}>
      {Array.from({ length: size * size }, (_, i) => {
        const found = coloredCells.find((c) => c.i === i);
        const color = found ? found.color : "white";

        return <GameTile i={i} key={i} color={color} />;
      })}
    </div>
  );
};

export default GameBoard;
