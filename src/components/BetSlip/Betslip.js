import React from 'react'
import Bet from "./Bet/Bet"
import './Betslip.css'

export default function Betslip(props) {
  let bets = [];
  let betTotal = 0;
  let betReturn = 0;

  if (props.bets.length > 0) {
    props.bets.forEach(bet => {
      bets.push( (<Bet 
        league={bet.league} 
        key={bet.betId}
        betId={bet.betId}
        team={bet.team} 
        price={bet.price} 
        betAmount={bet.betAmount} 
        matchDesc={bet.matchDesc}
        handleBetAmount={props.handleBetAmount}
        removeBet={props.removeBet} />))
      betTotal += bet.betAmount;
      betReturn += bet.betAmount*bet.price;
    });
  }

  return(
    <section class="betslip">
      <header>Betslip</header>
      {bets.length > 0? bets: "Place a bet"}
      {bets.length > 0?  <div class="confirmation" onClick={() => props.placeBet()}>
                    <div class="bet_size">{`Place Bet: $${betTotal.toString()}`}</div>
                    <div class="return">{`Total return: $${betReturn.toString()}`}</div>
                  </div>
                  : ""}
    </section>
  );
}
