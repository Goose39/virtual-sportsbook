import React from 'react'
import Bet from "./Bet/Bet"
import './Betslip.css'

export default function Betslip(props) {
  let bets = props.bets.map(bet => <Bet tournament={bet.tournament} team={bet.team} price={bet.price}/> )

  return(
    <section class="betslip">
      <header>Betslip</header>
      {bets.length > 0? bets: "Place a bet"}
      <div class="confirmation">
        <div class="bet_size">Place Bet: $100</div>
        <div class="return">Total return: $172.73</div>
      </div>
    </section>
  );
}


