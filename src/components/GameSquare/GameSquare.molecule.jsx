import React from "react";
import styles from "./GameSquare.module.css";
import GameTile from "../GameTile/GameTile.atom";

const GameSquare = ({ playedColor }) => {
  return (
    <div className={styles.square}>
      <GameTile color={playedColor} />
    </div>
  );
};

export default GameSquare;
