import React from 'react';
import './Bet.css';

export default function Bet(props) {
  console.log(props.betId)
  return(
    <>
      <div class="bet">
      <div class="bet_tournament">{props.league}</div>
        <div class="bet_desc">
          <div class="bet_team">{props.team} @</div>
          <div class="bet_price">{props.price}</div>
          <input class="bet_amount" type="text" value={props.betAmount} onChange={(e) => props.handleBetAmount(props.betId, e.target.value)} />
        </div>
      </div>
    </>
  );
}