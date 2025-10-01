import React from "react";
import styles from "./FiveInRowContainer.module.css";
import GameBoard2 from "../GameBoard2";
import ButtonRow from "../ButtonRow";

const FiveInRowContainer = ({
  numberOfButtons,
  onClick,
  size,
  coloredCells,
}) => {
  return (
    <div>
      <ButtonRow numberOfButtons={numberOfButtons} onClick={onClick} />
      <GameBoard2 size={size} coloredCells={coloredCells} />
    </div>
  );
};

export default FiveInRowContainer;
