import React from 'react'
import styles from "./Label.module.css";
const Label = ({text, htmlFor, className}) => {
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className || ""}`}>
       {text}
    </label>
  )
}

export default Label