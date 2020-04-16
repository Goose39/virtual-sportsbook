import React from 'react';
import TokenService from '../../services/token-service';
import BetsApiService from '../../services/bets-api-service';
import './BetList.css';

export default class BetList extends React.Component {
  state = {
    error: null,
    bets: [], 
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
    const{ user_id } = TokenService.readJwtToken();
    return BetsApiService.getUserBets(user_id)
        .then(bets => {
          this.setState({ bets })
        })
        .catch(error => this.setState({error}))
      } else this.setState({error: "Invalid User"})
  }
    
  render() {
  let bets = this.state.bets;

  return(
    <div className="bet_history">
      <header>Betting History</header>
      <table className="history">
        <thead>
          <tr>
            <th key='hm'>{`Match`}</th>
            <th key='ht'>{`Team`}</th>
            <th key='hp'>{`Price`}</th>
            <th key='ha'>{`Stake`}</th>
            <th key='hr'>{`Return`}</th>
            <th key='hs'>{`Status`}</th>
          </tr>
        </thead>
        <tbody className="bet_history_list">
          {bets.length > 0? 
            bets.map(bet => { 
              return <tr key={`bt-${bet.bet_id}`} className="bet_line">
                <td key={`md-${bet.bet_id}`}>{bet.match_desc}</td>
                <td key={`tn-${bet.bet_id}`}>{bet.team_name}</td>
                <td key={`p-${bet.bet_id}`}>{bet.price.toString()}</td>
                <td key={`a-${bet.bet_id}`}>{`$${(bet.bet_stake*100/100).toFixed(2)}`}</td>
                <td key={`r-${bet.bet_id}`}>{`$${(bet.bet_stake*bet.price*100/100).toFixed(2)}`}</td>
                <td key={`s-${bet.bet_id}`}>{bet.bet_status}</td>
              </tr>})
          : <tr><td colSpan="6">No bets to display</td></tr>}
        </tbody>
      </table>
    </div>
  );
  }
}