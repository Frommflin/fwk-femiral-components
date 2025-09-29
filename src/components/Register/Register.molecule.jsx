import React from "react";
import Input from '../Input/Input.atom';
import styles from "./Register.module.css";
import Label from '../Label/Label.atom';

const Register = ({ username, password, onChange, showPlaceholder = false }) => {
  if (showPlaceholder) return <div className={styles.registerMolecule}>box</div>;

  return (
    <div className={styles.registerMolecule}>
      <h3>Register</h3>
       <Label text="Username" htmlFor="username" />
      <Input
        type="text"
        value={username}
        onChange={(e) => onChange({ name: "username", value: e.target.value })}
        placeholder="Username"
      />
       <Label text="Password" htmlFor="Password" />
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
