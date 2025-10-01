import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import Input from "../InputField/InputField.molecule";
import Button from "../Button/Button.atom";

const LoginForm = ({ onSubmit }) => {
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
    <div className={styles.loginOrganism}>
      <h3>Login form</h3>
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
        label="Login"
        onClick={(e) => {
          e.preventDefault();
          onSubmit(user);
        }}
        className={styles.loginButton}
      />
    </div>
  );
};

export default LoginForm;
