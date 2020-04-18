import React, {Component} from 'react';
import LoginForm from './LoginForm/LoginForm';
import RegistrationFrom from './RegistrationForm/RegistrationForm';
import './LoginOptions.css'

export default class LoginOptions extends Component {
  state = {
    formOption: ''
  };
  // Display Selected Form
  setFrom = (form) => {

    if (this.state.formOption === form) {
      this.setState({
        formOption: ''
      })
    } else {
        this.setState({
          formOption: form
        })
      }
  };

  render () {
    return(
      <>
        <div className='login_options'>
          <button className="login_option" onClick={() => this.setFrom("Login")}>Login</button> 
          <div className="separator">|</div>
          <button className="login_option" type='button' onClick={() => this.setFrom("Register")}>Register</button>
        </div>
        <div className='form_container'>
          {this.state.formOption === 'Login'? <LoginForm onLoginSuccess={this.props.handleSetUser}/>: null}
          {this.state.formOption === 'Register'? <RegistrationFrom onRegistrationSuccess={this.props.handleSetUser}/>: null}
        </div>
      </>
    );
  }
}