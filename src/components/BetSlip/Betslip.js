import React, { useState } from 'react';
import Bet from './Bet/Bet';
import './Betslip.css';

export default function Betslip(props) {
  const [mobile_active, setMobile_active] = useState(false);

  // toggle for burger menu in mobile
  function toggleMobileMenu() {
    let change = !mobile_active;
    setMobile_active(change);
  }

    let bets = [];
    let totalBets = props.bets.length;
    let betTotal = 0;
    let betReturn = 0;

    if (totalBets > 0) {
      props.bets.forEach(bet => {
        bets.push( (<Bet 
          league={bet.league} 
          key={bet.betId}
          betId={bet.betId}
          team={bet.team} 
          price={bet.price} 
          stake={bet.stake} 
          teamId={bet.teamId}
          match_desc={bet.match_desc}
          handleStake={props.handleStake}
          removeBet={props.removeBet} 
          />))
        betTotal += bet.stake*100/100;
        betReturn += Math.floor(bet.stake*bet.price*100)/100;
      });
    }
    
    return(
      <>
        <div className='betslip_burger'>
          <button className='menu_item' onClick={() => toggleMobileMenu()}>Betslip</button>
          {totalBets > 0? <div className='betslip_count'>{totalBets}</div>:''}
        </div>
        <section className={`betslip ${mobile_active? 'mobile_active': ''}`}>
          <header>Betslip</header>

          {bets.length > 0? bets: 'Place a bet'}

          {bets.length > 0 && betTotal > 0 && betTotal <= props.balance && props.loggedIn?
            <button className='confirmation' onClick={() => props.placeBet(betTotal)}>
              <div className='bet_size'>{`Place Bet: $${betTotal.toFixed(2)}`}</div>
              <div className='return'>{`Total return: $${betReturn.toFixed(2)}`}</div>
            </button>
          : ''}
 
          {bets.length > 0 && betTotal === 0 && props.loggedIn?
            <div className='confirmation_disabled'>
              <div>Enter bet amount</div>
            </div>
          : ''}

          {betTotal > props.balance && props.loggedIn?  
            <div className='confirmation_disabled'>
              <div className='bet_size'>{`Total Bet: $${betTotal.toFixed(2)}`}</div>
              <div className='return'>Bet is larger than your balance.</div>
            </div>
          : ''}

          {!props.loggedIn && bets.length > 0?  
            <div className='confirmation_disabled'>
              <div>Login to place a bet</div>
            </div>
          : ''}
        </section>
      </>
    );
}