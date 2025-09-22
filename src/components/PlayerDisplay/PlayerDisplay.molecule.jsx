import React from "react";
import styles from "./PlayerDisplay.module.css";
import PlayerCard from "../PlayerCard";

const PlayerDisplay = ({
  user1 = "Waiting for player",
  user2 = "Waiting for player",
}) => {
  return (
    <div className={styles.container}>
      <PlayerCard i="1" user={user1} color="yellow" />
      <PlayerCard i="2" user={user2} color="red" />
    </div>
  );
};

export default PlayerDisplay;
