import React from "react";
import styles from "./LoginForm.module.css";
import Input from "../InputField/InputField.molecule"
import Button from "../Button/Button.atom";

const LoginForm = ({ username, password, onChange, onSubmit }) => {
  return (
    <div className={styles.loginOrganism}>
      <h3>Login form</h3>
      <Input
      label="Username"
        type="text"
        value={username}
        onChange={(e) => onChange({ name: "username", value: e.target.value })}
        placeholder="Username"
      />

      <Input
      label="Password"
        type="password"
        value={password}
        onChange={(e) => onChange({ name: "password", value: e.target.value })}
        placeholder="Password"
      />

      <Button
        type="submit"
        label="Login"
        onClick={onSubmit}
        className={styles.loginButton}
      />
    </div>
  );
};

export default LoginForm;
