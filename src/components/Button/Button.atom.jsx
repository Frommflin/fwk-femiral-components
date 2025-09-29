import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick, type = "button", label, className}) => {
  return (
    <button 
        type={type}
        onClick={onClick}
        className={`${styles.button} ${className || ""}`}>
          {label}
    </button>
  );
};

export default Button;