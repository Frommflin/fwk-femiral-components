import React from "react";
import styles from "./ButtonRow.module.css";
import { Button } from "..";

const ButtonRow = ({ numberOfButtons, onClick }) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: numberOfButtons }).map((_, index) => (
        <Button
          key={index}
          onClick={() => onClick(index)}
          label={`Button ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ButtonRow;
