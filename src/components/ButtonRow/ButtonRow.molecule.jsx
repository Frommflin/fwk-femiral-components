import React from "react";
import styles from "./ButtonRow.module.css";
import Button from "../Button";

const ButtonRow = ({ numberOfButtons = 4, onClick }) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: numberOfButtons }).map((_, index) => (
        <Button
          key={index}
          onClick={() => onClick(index)}
          label={`↓`}
          className={styles.fiveInRowButton}
        />
      ))}
    </div>
  );
};

export default ButtonRow;
