import React from 'react';
import Moment from 'moment';
import { checkMatchNotStarted } from '../../helpers/helpers';
import SportsbookContext from '../../context/SportsbookContext';
import MatchesApiService from '../../services/matches-api-service';
import Baseball from '../../assets/images/baseball.JPG';
import Basketball from '../../assets/images/basketball.JPG';
import Cricket from '../../assets/images/cricket.JPG';
import Football from '../../assets/images/football.JPG';
import IceHockey from '../../assets/images/ice-hockey.JPG';
import Rugby from '../../assets/images/rugby.JPG';
import Soccer from '../../assets/images/soccer.JPG';
import Tennis from '../../assets/images/tennis.JPG';
import './MatchView.css';

export default class MatchView extends React.Component {
  static contextType = SportsbookContext;

  state = {
    error: null,
    match: {}, 
    sport_name: null,
  }
  
  componentDidMount() {
    let user_id = this.props.match.params.matchId
    if (user_id) {
    MatchesApiService.getMatchById(user_id)
    .then(res => {
      this.setState({
        match: res, 
        sport_name: res.sport_name
      })
    })
    .catch(error => {
      this.setState({error})
      this.props.history.push('/upcoming')
      })
    }
  }

  componentWillReceiveProps(nextProps){
    let user_id = nextProps.match.params.matchId
    if (user_id) {
    MatchesApiService.getMatchById(user_id)
    .then(res => {
      this.setState({
        match: res,
        sport_name: res.sport_name
      })
    })
    .catch(error => {
      this.setState({error})
      this.props.history.push('/upcoming')
      })
    }
 }
 isEmpty = (obj) => {
  return JSON.stringify(obj) === '{}';
}

  render() {
    const imageStore = [
      { id: "Soccer", src: Soccer},
      { id: "Tennis", src: Tennis},
      { id: "American Football", src: Football},
      { id: "Basketball", src: Basketball},
      { id: "Baseball", src: Baseball},
      { id: "Cricket", src: Cricket},
      { id: "Ice Hockey", src: IceHockey},
      { id: "Rugby Union", src: Rugby},
      { id: "Rugby League", src: Rugby},
      { id: "Boxing/MMA", src: Rugby},
    ];
  
  let match = this.state.match;
    // // Check if match has already started
    // if (match !== null) {
    //   if () {
    //     this.setState({
    //       error: "Match already started. Cannot bet on matches that have already started"
    //     })
    //   }
    // }
    
    return (
      <>
      {this.state.error === null && match && this.state.sport_name && checkMatchNotStarted(match)?
      <div className="match_view">
        <div 
          className="match_view_header" 
          style={{ backgroundImage: `url(${imageStore[imageStore.findIndex(x => x.id === this.state.sport_name)].src})` }}>
          <div className="match_view_header_overlay">
            <div className="match_header">{match.sport_name} - {match.league_name}</div>
            <div className="opponents">{`${match.home_team_name} v ${match.away_team_name}`}</div>
            <div className="start_time">Starts: {Moment(match.match_start).format('lll')}</div> 
          </div>
        </div>
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