import React from 'react';
import Moment from 'moment'
import { checkMatchNotStarted } from '../../helpers/helpers';
import SportsbookContext from '../../context/SportsbookContext'
import MatchesApiService from '../../services/matches-api-service'
import './MatchView.css';

export default class MatchView extends React.Component {
  static contextType = SportsbookContext;

  state = {
    error: null,
    match: {}, 
  }
  

  componentDidMount() {
    MatchesApiService.getMatchById(this.props.match.params.matchId)
    .then(res => {
      this.setState({match: res})
      })
    .catch(error => this.setState({error}))
  }

  componentWillReceiveProps(nextProps){
    MatchesApiService.getMatchById(nextProps.match.params.matchId)
    .then(res => {
      this.setState({match: res})
      })
    .catch(error => this.setState({error}))
 }

  render() {
    let match = this.state.match;

    
     if (match != {}) {
      if (checkMatchNotStarted(match)) {
        this.setState({
          error: "Match already started. Cannot bet on matches that have already started"
        })
      }
    } else {
      this.setState({
        error: "Invalid match url requested. Please select another match"
      })
    }

    return (
      <>
      {this.state.error == null && match?
      <div className="match_view">
        <div className="match_header">{match.sport_name} - {match.league_name}</div>
        <div className="opponents">{`${match.home_team_name} v ${match.away_team_name}`}</div>
        <div className="start_time">Starts: {Moment(match.match_start).format('lll')}</div> 
        <div className="market">To win match</div> 
        <div className="outcomes">         
          <div className="outcome">
            <div className="team">{match.home_team_name}</div>
            <div className="odd" onClick={() => this.context.createBet(match.sport_name, match.league_name, match.home_team_name, match.home_team_price, match.match_id, `${match.home_team_name} v ${match.away_team_name}`, match.home_team_id)}>{match.home_team_price}</div>
          </div>
          <div className="outcome">
            <div className="team">{match.away_team_name}</div>
            <div className="odd" onClick={() => this.context.createBet(match.sport_name, match.league_name, match.away_team_name, match.away_team_price, match.match_id, `${match.home_team_name} v ${match.away_team_name}`, match.away_team_id)}>{match.away_team_price}</div>
          </div>
        </div>        
      </div>     
      :<div className="match_view"><p>{this.state.error}</p></div>}
      </>
    )
  }
}