import React, { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import RegistrationFrom from './RegistrationForm/RegistrationForm';
import './LoginOptions.css'

export default function LoginOptions(props) {
  const [formOption, setFormOption] = useState('');

  // Display Selected Form
  function setFrom(form) {
    if (formOption === form) {
      setFormOption('')
    } else {
      setFormOption(form)
      }
  };

  return(
    <>
      <div className='login_options'>
        <button className='login_option' onClick={() => setFrom('Login')}>Login</button> 
        <div className='separator'>|</div>
        <button className='login_option' type='button' onClick={() => setFrom('Register')}>Register</button>
      </div>
      <div className='form_container'>
        {formOption === 'Login'? <LoginForm onLoginSuccess={props.handleSetUser}/>: null}
        {formOption === 'Register'? <RegistrationFrom onRegistrationSuccess={props.handleSetUser}/>: null}
      </div>
    </>
  );
}