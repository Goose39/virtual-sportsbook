import React, { Component } from 'react';
import './LoginForm.css'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}, 
    handleSetUser: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    
    this.setState({ error: null })
    const { user_name, password } = ev.target

    this.props.handleSetUser(user_name.value, 1000)

    this.props.onLoginSuccess()

  };

  render() {
    const { error } = this.state
    return (
      <form
        className="login_form"
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </input>
        </div>
        <button className="login_button" type='submit'>
          Login
        </button>
      </form>
    )
  };
};
