import React from "react";
import styles from "./ButtonRow.module.css";

const ButtonRow = ({ numberOfButtons, onClick }) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: numberOfButtons }).map((_, index) => (
        <button key={index} onClick={() => onClick(index)}>
          Button {index + 1}
        </button>
      ))}
    </div>
  );
};

export default ButtonRow;
