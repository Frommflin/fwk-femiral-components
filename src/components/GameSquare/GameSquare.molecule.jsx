import React from "react";
import styles from "./GameSquare.module.css";
import GameTile from "../GameTile/GameTile.atom";

const GameSquare = ({ playedColor, className }) => {
  return (
    <div className={`${styles.square} ${className || ""}`}>
      <GameTile color={playedColor} />
    </div>
  );
};

export default GameSquare;
