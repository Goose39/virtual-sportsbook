import React from 'react';
import './Welcome.css';

export default class Welcome extends React.Component {
  render() {
    return (
      <section className='welcome'>
        <div className='instructions'>
          <header>Description</header>
          <p>This app was built to give sports enthusiasts the opportunity to place bets on their favorite sports. The reponsive design supports any screen size from PC or Laptop to Tablets and Mobile Phones.</p>
          <header>Match Generation</header>
          <p>All matches are randomly generated. Matches are created every 15min, starting 24 hours after creation. All matches will be resulted 1min after they have started and all bets placed on those matches are settled 1min after the results have been finalized.</p>
          <header>User Accounts</header>
          <p>Users will need to register an account in order to place bets. Each new account will be loaded with $1000 in virtual currency. Once you have created an account, you will be automatically logged in ready to place your first bet!</p>
          <header>Placing Bets</header>
          <p>In order to place a bet you will need to find a match to bet on. There are two ways to do this; either by navigating through the "Match List" on the left hand side of the screen or you could click on "Upcoming Matches" on the top left to easily navigate to matches which are starting soon.</p>
          <p>Once you have found your match, it will load into the console in the center of the page. Click on the price/odd below the team you want to bet on. The bet will then load into the "Betslip" on the right.</p>
          <p>The "Betslip" is where you will place your bet. Enter the amount that you would like to bet on your team (not more than your balance, of course!). When you are happy with the amount you have entered and the team you have selected, click "Place Bet" at the bottom of the betslip to place your bet! </p>
          <p>To check the results of your bets, simply click on "Bet History", at the top of the page to the right of your username. There you will find a list of all your previous bets.</p>
          <header>Reset Balance</header>
          <p>Blown up your bankroll? Don't stress, just click the "Reset Balance" button that will appear where your balance used to be. Your account will be reloaded with another $1000.</p>
          <p>Good Luck!</p>
        </div>
      </section>
    )
  };
};
