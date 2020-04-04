import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import MatchList from '../MatchList/MatchList';
import Betslip from '../BetSlip/Betslip';
import MatchView from '../MatchView/MatchView';
import BetHistroy from '../BetHistory/BetHistory'
import './Sportsbook.css';

export default class Sportsbook extends Component {
  
  render() {
    return (
      <>
        <Navbar user={this.props.user} balance={this.props.balance} bets={this.props.bets}/>
        <div className="console">
          <MatchList matches={this.props.matches}/>
          {this.props.betHistory? <BetHistroy />
            : <MatchView 
                tournament="UEFA Champions League" 
                home_team="Bayern" 
                home_odd={1.73} 
                away_team="Chelsea" 
                away_odd={2.0} 
                createBet={this.props.createBet}
              />}
          <Betslip bets={this.props.bets} />
        </div>
      </>
    )

  }

}