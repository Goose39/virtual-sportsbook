import React from 'react'
import Bet from "./Bet/Bet"
import './Betslip.css'

export default class Betslip extends React.Component {

  state = {
    mobile_active: false, 
  }
  
  toggleMobileMenu = () => {
    console.log("fires toggleMobileMenu")
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
          betAmount={bet.betAmount} 
          matchDesc={bet.matchDesc}
          handleBetAmount={this.props.handleBetAmount}
          removeBet={this.props.removeBet} />))
        betTotal += bet.betAmount;
        betReturn += bet.betAmount*bet.price;
      });
    }

    return(
      <>
        <div className="betslip_burger menu_item" onClick={() => this.toggleMobileMenu()}>
          <div>Betslip</div>
          {totalBets > 0? <div className="betslip_count">{totalBets}</div>:""}
        </div>
        <section class={`betslip ${this.state.mobile_active? "mobile_active": ""}`}>
          <header>Betslip</header>
          {bets.length > 0? bets: "Place a bet"}
          {bets.length > 0?  <div class="confirmation" onClick={() => this.props.placeBet()}>
                        <div class="bet_size">{`Place Bet: $${betTotal.toString()}`}</div>
                        <div class="return">{`Total return: $${betReturn.toString()}`}</div>
                      </div>
                      : ""}
        </section>
      </>
    );
  }
}