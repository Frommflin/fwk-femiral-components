import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type,
  id,
  value,
  onChange,
  placeholder,
  disabled = false,
  className,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`${styles.inputField} ${className || ""}`}
    />
  );
};

export default Input;
