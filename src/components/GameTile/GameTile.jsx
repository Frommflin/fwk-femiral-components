import React from "react";
import styled from "./GameTile.module.css";

const GameTile = ({ i, color }) => {
  return (
    <div className={styled.cell} key={i}>
      <div
        className={styled.cellContent}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default GameTile;
