import React, { useState } from "react";
import Input from "../InputField/InputField.molecule";
import styles from "./RegisterForm.module.css";
import Button from "../Button/Button.atom";

const RegisterForm = ({ onSubmit }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const onNameChange = (name) => {
    setUser({
      ...user,
      username: name,
    });
  };
  const onPwdChange = (pwd) => {
    setUser({
      ...user,
      password: pwd,
    });
  };

  return (
    <div className={styles.registerOrganism}>
      <h3>Register account</h3>
      <Input
        inputId="username"
        label="Username"
        type="text"
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Username"
      />

      <Input
        inputId="pwd"
        label="Password"
        type="password"
        onChange={(e) => onPwdChange(e.target.value)}
        placeholder="Password"
      />

      <Button
        type="submit"
        label="Register"
        onClick={(e) => {
          e.preventDefault();
          onSubmit(user);
        }}
        className={styles.registerButton}
      />
    </div>
  );
};

export default RegisterForm;
