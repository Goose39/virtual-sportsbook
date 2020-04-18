import React from 'react';
import './Welcome.css';

export default class Welcome extends React.Component {
  render() {
    return (
      <section className='welcome'>
        <div className='instructions'>
          <p>This app was built to give sports enthusiasts the opportunity to place bets on your favourite sports. The reponsive design supports any screen size from PC or Laptop to Tables and Mobile Phones.</p>
          <p>All matches are randomly generated. Matches are created every 15min with a starting time 24hrs in the future. All matches will be resulted 1min after they have started and all bets placed on those matches are settled 1min after the results have been finalized.</p>
          <p>Users will need to register an account in order to place bets. Each new account will be loaded with $1000 in virtual currency. Once you have created an account, you will be automatically logged in and you will be ready toplace your first bet!</p>
          <p>I order to place a bet you will need to find a match to bet on. There are two ways to do this; either by navigating through the "Match List" on the left hand side of the screen or you could click on "Upcoming Matches" on the top left to quickly navigate to the matches which are starting soon.</p>
          <p>Once you have found your match, it will load in to the console in the center of the page. Click on the price/odd below the team you want to bet on. The bet will then load into the "Betslip" on the right.</p>
          <p>The "Betslip" is where you will make your bet. Enter the amount that you would like to bet on your team (not more than your balance, of course!). When you are happy witht e amount you have enter and the team you have selected, click "Place Bet" at the bottom of the betslip and your bet is placed! </p>
          <p>To check the results of your bets simply click at top of the page to the right of your user name, on "Bet History". There you will find a list of all your previous bets.</p>
          <p>Blown up your bankroll? Dont stress, just click the RESET BALANCE button that will appear where you balance used to be. Your account will be reloaded with another $1000.</p>
          <p>Good Luck!</p>
        </div>
      </section>
    )
  };
};
