import React from 'react';
import SportsbookContext from "../../context/SportsbookContext";
import BetsApiService from '../../services/bets-api-service';
import './BetList.css';

export default class BetList extends React.Component {
  static contextType = SportsbookContext;

  state = {
    error: null,
    bets: [], 
  }

  componentDidMount() {
    if (this.context.user_id) {
    return BetsApiService.getUserBets(this.context.user_id)
        .then(bets => {
          this.setState({ bets })
        })
        .catch(error => this.setState({error}))
      } else this.setState({error: "Invalid User"})
  }

  render() {
  let bets = this.state.bets;
  let betList = []

  if (bets.length > 0) {
    betList = bets.map(bet => { 
     return <tr key={`bt-${bet.bet_id}`} className="bet_line">
        <td key={`md-${bet.bet_id}`}>{bet.match_desc}</td>
        <td key={`tn-${bet.bet_id}`}>{bet.team_name}</td>
        <td key={`p-${bet.bet_id}`}>{bet.price.toString()}</td>
        <td key={`a-${bet.bet_id}`}>{`$${(bet.bet_stake*100/100).toFixed(2)}`}</td>
        <td key={`r-${bet.bet_id}`}>{`$${(bet.bet_stake*bet.price*100/100).toFixed(2)}`}</td>
        <td key={`s-${bet.bet_id}`}>{bet.bet_status}</td>
        </tr>})                             
  } else betList = "No bets to display";
  
  return(
    <div className="bet_history">
      <header>Betting History</header>
      <table className="history">
        <thead>
          <tr>
            <th key='hm'>Match</th>
            <th key='ht'>Team</th>
            <th key='hp'>Price</th>
            <th key='ha'>Stake</th>
            <th key='hr'>Return</th>
            <th key='hs'>Status</th>
          </tr>
        </thead>
        <tbody className="bet_history_list">
          {betList}
        </tbody>
      </table>
    </div>
  );
  }
}