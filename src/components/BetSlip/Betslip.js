import React from 'react'
import Bet from './Bet/Bet'
import './Betslip.css'

export default class Betslip extends React.Component {
  state = {
    mobile_active: false, 
  }
  // toggle for burger menu in mobile
  toggleMobileMenu = () => {
    let change = !this.state.mobile_active

    this.setState({
      mobile_active: change,
    })
  }

  render() {

    let bets = [];
    let totalBets = this.props.bets.length;
    let betTotal = 0;
    let betReturn = 0;

    if (totalBets > 0) {
      this.props.bets.forEach(bet => {
        bets.push( (<Bet 
          league={bet.league} 
          key={bet.betId}
          betId={bet.betId}
          team={bet.team} 
          price={bet.price} 
          stake={bet.stake} 
          teamId={bet.teamId}
          match_desc={bet.match_desc}
          handleStake={this.props.handleStake}
          removeBet={this.props.removeBet}
          showMenu={this.showMenu} 
          />))
        betTotal += bet.stake*100/100;
        betReturn += Math.floor(bet.stake*bet.price*100)/100;
      });
    }
    
    return(
      <>
        <div className='betslip_burger'>
          <button className='menu_item' onClick={() => this.toggleMobileMenu()}>Betslip</button>
          {totalBets > 0? <div className='betslip_count'>{totalBets}</div>:''}
        </div>
        <section 
          className={`betslip ${this.state.mobile_active? 'mobile_active': ''}`} 
          ref={element => this.dropdownMenu = element} >
          <header>Betslip</header>

          {bets.length > 0? bets: 'Place a bet'}

          {bets.length > 0 && betTotal > 0 && betTotal <= this.props.balance && this.props.loggedIn?
            <button className='confirmation' onClick={() => this.props.placeBet(betTotal)}>
              <div className='bet_size'>{`Place Bet: $${betTotal.toFixed(2)}`}</div>
              <div className='return'>{`Total return: $${betReturn.toFixed(2)}`}</div>
            </button>
          : ''}
 
          {bets.length > 0 && betTotal === 0 && this.props.loggedIn?
            <div className='confirmation_disabled'>
              <div>Enter bet amount</div>
            </div>
          : ''}

          {betTotal > this.props.balance && this.props.loggedIn?  
            <div className='confirmation_disabled'>
              <div className='bet_size'>{`Total Bet: $${betTotal.toFixed(2)}`}</div>
              <div className='return'>Bet is larger than your balance.</div>
            </div>
          : ''}

          {!this.props.loggedIn && bets.length > 0?  
            <div className='confirmation_disabled'>
              <div>Login to place a bet</div>
            </div>
          : ''}
        </section>
      </>
    );
  }
}