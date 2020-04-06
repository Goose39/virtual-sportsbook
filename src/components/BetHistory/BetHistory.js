import React, {Component} from 'react';
import Betslip from '../BetSlip/Betslip';
import BetList from '../MatchView/MatchView';
import './BetHistory.css'

export default class Sportsbook extends Component {
  
  render() {
    return (
      <>
        <Navbar user={this.props.user} balance={this.props.balance} bets={this.props.bets}/>
        <div className="console">
          <MatchList matches={this.props.matches}/>
          <BetList betHistory={props.betHistory}/>
          <Betslip bets={this.props.bets} />
        </div>
      </>
    )

  }

}