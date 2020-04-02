import React, { Component } from 'react';
import { Button, Input, Required } from '../../Utils/Utils';

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }
  // Password Validation before sending request to server
  validatePassword = password => {
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/

    if (password.length < 8) {
      return 'Password must be at least 8 characters'
    }
    if (password.length > 72) {
      return 'Password msut be less than 72 characters'
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password cannot start or end with empty spaces'
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return 'Password must contain one upper case, lower case, number and special character'
    }
    return null
  };

  handleSubmit = ev => {
    ev.preventDefault()
    // Disable button on 1st click, users may click twice due to slow server response time.
    document.getElementById("register").disabled = true;
    
    const { full_name, nick_name, user_name, password } = ev.target
    const newUser = { full_name: full_name.value, nick_name: nick_name.value, user_name: user_name.value, password: password.value }

    this.setState({ error: null })

    const passwordError = this.validatePassword(newUser.password)
    // Check for valid password before proceeding with POST request
    if (!passwordError) {
      this.props.handleSetUser(user_name.value, 1000)
      full_name.value = ''
      nick_name.value = ''
      user_name.value = ''
      password.value = ''
      this.props.onRegistrationSuccess()
    } else {
      this.setState({ error: passwordError })
    }
};
  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'>
          </Input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div className='nick_name'>
          <label htmlFor='RegistrationForm__nick_name'>
            Nickname <Required />
          </label>
          <Input
            name='nick_name'
            type='text'
            required
            id='RegistrationForm__nick_name'>
          </Input>
        </div>
        <Button id='register' type='submit'>
          Register
        </Button>
      </form>
    )
  };
};
