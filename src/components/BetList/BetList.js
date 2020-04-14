import React from 'react';
import SportsbookContext from "../../SportsbookContext";
import './BetList.css'

export default class BetList extends React.Component {
  static contextType = SportsbookContext;

  render() {
  let bets = this.context.bets;
  let betList = []

  if (bets.length > 0) {
    betList = bets.map(bet => ( 
      <tr key={bet.betId} className="bet_line">
        <td>{bet.match_desc}</td>
        <td>{bet.team_name}</td>
        <td>{bet.price.toString()}</td>
        <td>{`$${(bet.bet_stake*100/100).toFixed(2)}`}</td>
        <td>{`$${(bet.bet_stake*bet.price*100/100).toFixed(2)}`}</td>
        <td>{bet.bet_status}</td>
      </tr>))                             
  } else betList = "No bets to display";
  
  return(
    <div className="bet_history">
      <header>Betting History</header>
      <table className="history">
        <thead>
          <tr>
            <th>Match</th>
            <th>Team</th>
            <th>Price</th>
            <th>Stake</th>
            <th>Return</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {betList}
        </tbody>
      </table>
    </div>
  );
  }
}