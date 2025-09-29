import React from "react";
import Input from '../Input/Input.atom';
import styles from "./Register.module.css";
import Label from '../Label/Label.atom';
import Button from '../Button/Button.atom';


const Register = ({ username, password, onChange, onSubmit }) => {
  return (
    <div className={styles.registerOrganism}>
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
      <Button
        type="submit"
        label="Register"
        onClick={onSubmit}
      />
    </div>
    
  );
};

export default Register;
