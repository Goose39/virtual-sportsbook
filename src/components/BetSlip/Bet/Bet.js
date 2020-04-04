import React from 'react'
import './Bet.css'

export default function Navbar(props) {
  return(
    <>
      <div class="bet">
      <div class="bet_tournament">{props.tournament}</div>
        <div class="bet_desc">
          <div class="bet_team">{props.team} @</div>
          <div class="bet_price">{props.price}</div>
          <input class="bet_amount" type="text" placeholder="$100"/>
        </div>
      </div>
    </>
  );
}