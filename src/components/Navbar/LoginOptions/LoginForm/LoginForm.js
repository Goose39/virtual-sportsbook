import React from 'react';
import './LoginForm.css';
import TokenService from '../../../../services/token-service';
import AuthApiService from '../../../../services/auth-api-service';

export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}, 
  };

  state = { error: null };
  

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault()
    TokenService.clearAuthToken();
    this.setState({ error: null })

    const { user_name, password } = ev.target
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
    .then(res => {
      console.log('login res', res)
      const { user_name } = TokenService.readJwtToken();
      this.props.onLoginSuccess(user_name, res.user_balance)
    })
    .catch(err => {
      password.value = '';
      console.log(err)
      this.setState({ error: err.error })
    })
  };

  render() {
    const { error } = this.state
    return (
      <form
        className='login_form'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='field'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </input>
        </div>
        <div className='field'>
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
        <button className='login_button' type='submit'>
          Login
        </button>
      </form>
    )
  };
};
