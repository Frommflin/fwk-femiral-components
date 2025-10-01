import React from "react";
import styles from "./FiveInRowContainer.module.css";
import GameBoard2 from "../GameBoard2";
import ButtonRow from "../ButtonRow";

const FiveInRowContainer = ({
  onClick,
  size,
  coloredCells,
  classNameGameSquare,
}) => {
  return (
    <div className={styles.fiveInRowContainer}>
      <ButtonRow numberOfButtons={size} onClick={onClick} />
      <GameBoard2
        size={size}
        coloredCells={coloredCells}
        classNameGameSquare={classNameGameSquare}
      />
    </div>
  );
};

export default FiveInRowContainer;
