import React from "react"
import styled from "./GameTile.module.css"

const GameTile = ({ color }) => {
  return (
    <div className={styled.tile} style={{ backgroundColor: color }}></div>
  )
}

export default GameTile
