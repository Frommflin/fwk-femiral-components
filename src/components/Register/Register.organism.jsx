import React from "react";
import Input from '../InputField/InputField.molecule'
import styles from "./Register.module.css";
import Button from '../Button/Button.atom';


const RegisterForm = ({ username, password, onChange, onSubmit }) => {
  return (
    <div className={styles.registerOrganism}>
      <h3>Register</h3>
      <Input
        label="Username"
        type="text"
        id="username"
        value={username}
        onChange={(e) => onChange({ name: "username", value: e.target.value })}
        placeholder="Username"
      />
     
      <Input
      label="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => onChange({ name: "password", value: e.target.value })}
        placeholder="Password"
      />
      <Button
        type="submit"
        label="Register"
        onClick={onSubmit}
        className={styles.registerButton}
      />
    </div>
    
  );
};

export default RegisterForm;
