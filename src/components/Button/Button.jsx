import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick, type = "button"}) => {
  return (
    <button> 
        type={type}
        classname={styles.button}
        onClick={onClick}
    </button>
  );
};

export default Button;