import React from 'react';
import Input from '../Input/Input';
import styles from './Register.module.css';

const Register = ({ formData, onChange, onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2>Register</h2>
      <Input
        type="text"
        value={formData.username}
        onChange={(e) => onChange({ name: 'username', value: e.target.value })}
        placeholder="Username"
      />
      <Input
        type="password"
        value={formData.password}
        onChange={(e) => onChange({ name: 'password', value: e.target.value })}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
