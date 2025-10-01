import React from "react";
import styles from "./InfoBox.module.css";

const InfoBox = ({ styling, children }) => {
  return (
    <div className={styles.container} style={styling}>
      {children}
    </div>
  );
};

export default InfoBox;
