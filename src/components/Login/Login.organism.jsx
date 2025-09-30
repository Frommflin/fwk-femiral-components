import React from 'react'
import styles from './login.module.css'
import Input from '../Input/Input.atom';;
import Label from '../Label/Label.atom';
import Button from '../Button/Button.atom';

const Login = ({username, password, onChange, onSubmit}) => {
  return (
    <div className={styles.loginOrganism}>
      <h3>Login</h3>
      <Label text="Username" htmlFor="username" />
      <Input
        type="text"
        value={username}
        onChange={(e) => onChange({ name: "username", value: e.target.value })}
        placeholder="Username"
      />

      <Label text="Password" htmlFor="password" />
      <Input
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
  )
}

export default Login