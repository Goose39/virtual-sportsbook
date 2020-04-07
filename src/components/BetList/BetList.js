import React from 'react';
import './BetList.css'

export default function BetList(props) {
  let bets = [];

  if (props.bets) {
    bets = props.bets.map(bet => ( 
      <tr key={bet.betId} className="bet_line">
        <td>{bet.matchDesc}</td>
        <td>{bet.price.toString()}</td>
        <td>{`$${bet.stake.toString()}`}</td>
        <td>{`$${bet.return.toString()}`}</td>
        <td>{bet.status}</td>
      </tr>))                             
  } else bets = "No bets to display";
  
  return(
    <div className="bet_history">
      <header>Betting History</header>
      <table className="history">
        <thead>
          <tr>
            <th>Details</th>
            <th>Price</th>
            <th>Stake</th>
            <th>Return</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bets}
        </tbody>
      </table>
    </div>
  );
}
