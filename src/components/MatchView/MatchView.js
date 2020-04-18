import React, { useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';
import { useParams } from 'react-router';
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

export default function MatchView() {
  const context = useContext(SportsbookContext);
  const history = useHistory();
  let { matchId } = useParams();
  const [error, setError] = useState(null);
  const [match, setMatch] = useState({});
  const [sport_name, setSportName]  = useState(null);
  // useEffect substituted for depreciated onComponentWillReceiveProps()
  useEffect(
    () => {
      MatchesApiService.getMatchById(matchId)
      .then(res => {
        setMatch(res)
        setSportName(res.sport_name)
        })
      .catch(error => {
        setError({error})
        history.push('/upcoming')
        })
    },[matchId]);
    // store image urls for header images of each sport
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
    // Check if match has started, to disable odds buttons
    let buttonDisabled = "disabled" 
    if (checkMatchNotStarted(match)) {
      buttonDisabled = ""
    }
    return (
      <>
      {error === null && match && sport_name?
      <div className="match_view">
        <div 
          className="match_view_header" 
          style={{ backgroundImage: `url(${imageStore[imageStore.findIndex(x => x.id === sport_name)].src})` }}>
          <div className="match_view_header_overlay">
            <div className="match_header">{match.sport_name} - {match.league_name}</div>
            <div className="opponents">{`${match.home_team_name} v ${match.away_team_name}`}</div>
            <div className="start_time">Starts: {Moment(match.match_start).format('lll')}</div> 
          </div>
        </div>
        {!checkMatchNotStarted(match)? <div className="match_start_error"><p>MATCH HAS ALREADY STARTED.</p><p>YOU WILL NOT BE ABLE TO PLACE BETS ON IT</p></div>:null}
        <div className="market">To win match</div> 
        <div className="outcomes">         
          <div className="outcome">
            <div className="team">{match.home_team_name}</div>
            <button 
              className="odd"
              disabled={buttonDisabled}
              onClick={checkMatchNotStarted(match)
                ? () => context.createBet(
                  match.sport_name, 
                  match.league_name, 
                  match.home_team_name, 
                  match.home_team_price, 
                  match.match_id, 
                  `${match.home_team_name} v ${match.away_team_name}`, 
                  match.home_team_id )
                : null
                }> {match.home_team_price}
            </button>
          </div>
          <div className="outcome">
            <div className="team">{match.away_team_name}</div>
            <button 
              className="odd" 
              disabled={buttonDisabled}
              onClick={checkMatchNotStarted(match)
                ? () => context.createBet(
                  match.sport_name, 
                  match.league_name, 
                  match.away_team_name, 
                  match.away_team_price, 
                  match.match_id, 
                  `${match.home_team_name} v ${match.away_team_name}`, 
                  match.away_team_id )
                 : null 
                }> {match.away_team_price}
            </button>
          </div>
        </div>        
      </div>     
      :<div className="match_view"><p>{error}</p></div>}
      </>
    )
  }