import React from "react";
import Input from '../Input/Input.atom';
import styles from "./Register.module.css";
import Label from '../Label/Label.atom';
import Button from '../Button/Button.atom';

<<<<<<< HEAD:src/components/Register/Register.molecule.jsx
const Register = ({ username, password, onChange, showPlaceholder = false }) => {
  if (showPlaceholder) return <div className={styles.registerMolecule}>box</div>;

=======
const Register = ({ username, password, onChange, onSubmit }) => {
>>>>>>> b29b5c1 (changed the register.molocule to organism, imported button component and modfied register.stories.jsx accorging that):src/components/Register/Register.organism.jsx
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
      <Button
        type="submit"
        label="Register"
        onClick={onSubmit}
      />
    </div>
    
  );
};

export default Register;
