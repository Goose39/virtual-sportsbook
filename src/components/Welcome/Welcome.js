import React from 'react';
import './Welcome.css';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationFrom from '../RegistrationForm/RegistrationForm';

export default class Welcome extends React.Component {
  state = {
    formOption: ''
  };
  // Display Selected Form
  setFrom = (form) => {
    this.setState({
      formOption: form
    })
  };

  render() {
    return (
    <main className ="app">
      <section className="welcome">
        <div className="instructions">
          <p>This was built to give sports enthusiasts the opportunity to place a bet on their favourite sport and teams.</p>
          <p>Start by creating an account by clicking on "Register a new Account" below</p>
          <p>Once you have created an account you will be be able to place bets with a starting account balance of $1,000</p>
          <p>If you already have an account setup, you can login by clicking the "Login with existing account" button below.</p>
          <p>Once you have logged in, you can start placing bets. You can find all the available matches that you can place bets on, on the left hand side of your screen.</p>
          <p>Matches are grouped as follows: Sport >> League >> match. So if you are looking for Federer Vs Nadal tennis match, click Tennis, then ATP, then Federer Vs Nadal. You will then see the odds for each of the opponents.</p>
          <p>Clciking the odd/price will add the bet to you betslip. Enter the amount you would like to wager in the betslip on the right of the screen and click "Place Bet" to complete the transaction.</p>
          <p>GOOD LUCK!</p>
        </div>
        <div className='login_options'>
          <input className="user_login_control" type='button' onClick={() => this.setFrom("Login")} value='Login' />
          <input className="user_login_control" type='button' onClick={() => this.setFrom("Register")} value='Register' />
        </div>
        <div className='login_container'>
          {this.state.formOption === 'Login'? <LoginForm onLoginSuccess={this.props.goToTable} handleSetUser={this.props.handleSetUser}/>: null}
          {this.state.formOption === 'Register'? <RegistrationFrom onRegistrationSuccess={this.props.goToTable} handleSetUser={this.props.handleSetUser}/>: null}
        </div>
      </section>
    </main>
    )
  };
};
