import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick, type = "button", label}) => {
  return (
    <button 
        type={type}
        onClick={onClick}>
          {label}
    </button>
  );
};

export default Button;