import React from "react";
import styles from "./GameBoard.module.css";

export const GameBoard = ({
  size = 7,
  coloredCells = [{ i: 5, color: "white" }],
}) => {
  return (
    <div className={styles.gameBoard}>
      {Array.from({ length: size * size }, (_, i) => {
        const found = coloredCells.find((c) => c.i === i);
        const color = found ? found.color : "white";

        return (
          <div key={i} className={styles.cell}>
            <div
              className={styles.cellContent}
              style={{ backgroundColor: color }}
            >
              {i}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
