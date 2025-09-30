import React from 'react'
import styles from './login.module.css'
import Input from '../Input/Input.atom';;
import Label from '../Label/Label.atom';
import Button from '../Button/Button.atom';

const Login = ({username, password, onChange, onSubmit}) => {
  return (
    <div className={styles.loginOrganism}>
      <h3>Login</h3>
      <label text='Username' htmlFor='Username'/>
      <Input
      text='username'
      value={username}
      onChange={(e)=> onChange({name: 'usernmae', value: e.target.value})}
      placeholder='username'
      />
      <Label text='passsword' htmlFor='password' />
      <input 
      text= 'username'
      value={password}
      onChange={(e)=>onChange({name: 'password', value: e.target.value })}
      placeholder='password'
      />
      <Button
      type='submit'
      label='Login'
      onClick={onSubmit}
     className='{styles.loginButton}'
      />
    </div>
  )
}

export default Login