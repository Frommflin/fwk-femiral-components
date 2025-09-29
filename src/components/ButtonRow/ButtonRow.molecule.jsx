import React from "react";
import styles from "./ButtonRow.module.css";

const ButtonRow = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 7 }).map((_, index) => (
        <button key={index}>Button {index + 1}</button>
      ))}
    </div>
  );
};

export default ButtonRow;
