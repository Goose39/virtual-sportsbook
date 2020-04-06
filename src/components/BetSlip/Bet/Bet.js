import React from 'react';
import './Bet.css';

export default function Bet(props) {
  return(
    <>
      <div className="bet">
        <div className="remove_bet" onClick={() => props.removeBet(props.betId)}>X</div>
        <div className="bet_desc">
          <div className="bet_team">{props.team}</div>
          <div className="bet_market">To win match</div>
          <div className="match_desc">{props.matchDesc}</div>
          <div className="bet_league">{props.league}</div>
        </div>
        <div className="bet_price">{props.price}</div>
        <div>
          <input className="bet_amount" type="text" value={props.betAmount} onChange={(e) => props.handleBetAmount(props.betId, e.target.value)} />
        </div>
      </div>
    </>
  );
}