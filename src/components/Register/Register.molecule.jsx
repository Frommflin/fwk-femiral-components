import React from "react";
import Input from "../Input/Input";
import styles from "./Register.module.css";

const Register = ({ username, password, onChange, showPlaceholder = false }) => {
  if (showPlaceholder) return <div className={styles.registerMolecule}>box</div>;

  return (
    <div className={styles.registerMolecule}>
      <h3>Register</h3>

      <Input
        type="text"
        value={username}
        onChange={(e) => onChange({ name: "username", value: e.target.value })}
        placeholder="Username"
      />

      <Input
        type="password"
        value={password}
        onChange={(e) => onChange({ name: "password", value: e.target.value })}
        placeholder="Password"
      />
    </div>
  );
};

export default Register;
