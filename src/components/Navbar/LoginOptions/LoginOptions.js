import React, {Component} from 'react';
import LoginForm from '../../LoginForm/LoginForm';
import RegistrationFrom from '../../RegistrationForm/RegistrationForm'

export default class LoginOptions extends Component {
  state = {
    formOption: ''
  };
  // Display Selected Form
  setFrom = (form) => {
    this.setState({
      formOption: form
    })
  };

  render () {
    return(
      <>
        <div className='login_options'>
          <input className="user_login_control" type='button' onClick={() => this.setFrom("Login")} value='Login' />
          <input className="user_login_control" type='button' onClick={() => this.setFrom("Register")} value='Register' />
        </div>
        <div className='login_container'>
          {this.state.formOption === 'Login'? <LoginForm onLoginSuccess={this.props.goToTable} handleSetUser={this.props.handleSetUser}/>: null}
          {this.state.formOption === 'Register'? <RegistrationFrom onRegistrationSuccess={this.props.goToTable} handleSetUser={this.props.handleSetUser}/>: null}
        </div>
      </>
    );
  }
}