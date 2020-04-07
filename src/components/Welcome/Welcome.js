import React from 'react';
import './Welcome.css';

export default class Welcome extends React.Component {
  render() {
    return (
      <section className="welcome">
        <div className="instructions">
          <p>This app was built to give sports enthusiasts the opportunity to place a bet on their favourite sport and teams.</p>
          <p>Start by creating an account by clicking on "Register" above</p>
          <p>Once you have created an account you will be be able to place bets with a starting account balance of $1,000</p>
          <p>If you already have an account setup, you can login by clicking the "Login" above.</p>
          <p>Once you have logged in, you can start placing bets. You can find all the available matches that you can place bets on, on the left hand side of your screen.</p>
          <p>Matches are grouped as follows: Sport >> League >> match. So if you are looking for Federer Vs Nadal tennis match, click Tennis, then ATP, then Federer Vs Nadal. You will then see the odds for each of the opponents.</p>
          <p>Cliking the odd/price will add the bet to you betslip. Enter the amount you would like to wager in the betslip on the right of the screen and click "Place Bet" to complete the transaction.</p>
          <p>GOOD LUCK!</p>
        </div>
      </section>
    )
  };
};
