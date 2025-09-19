import React from "react";
import styles from "./GameBoard.module.css";
import GameSquare from "../GameSquare";

export const GameBoard = ({
  size = 7,
  coloredCells = [{ i: 5, color: "white" }],
}) => {
  return (
    <div
      className={styles.gameBoard}
      style={{
        gridTemplateColumns: `repeat(${size}, 40px)`,
        gridTemplateRows: `repeat(${size}, 40px)`,
      }}
    >
      {Array.from({ length: size * size }, (_, i) => {
        const found = coloredCells.find((c) => c.i === i);
        const color = found ? found.color : "white";

        return <GameSquare i={i} key={i} playedColor={color} />;
      })}
    </div>
  );
};

export default GameBoard;
