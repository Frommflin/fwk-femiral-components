import React from 'react'
import styles from "./Label.module.css";
const Label = ({text, className}) => {
  return (
    <label  className={`${styles.label} ${className || ""}`}>
       {text}
    </label>
  )
}

export default Label