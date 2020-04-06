import React from 'react';
import SportsbookContext from "../../SportsbookContext";
import { findMatch } from '../../helpers/helpers';
import './MatchView.css';

export default class MatchView extends React.Component {
  static contextType = SportsbookContext;

  render() {
    const { matches=[] } = this.context;
    let matchId = this.props.match.params.matchId;
    const match = findMatch(matches, matchId);
    return (
      match != null?
      <div className="match_view">
        <div class="match_header">{match.league}</div>
        <div class="opponents">{`${match.home_team} v ${match.away_team}`}</div>
        <div class="market">
          <div class="desc">Win Match</div>
          <div class="outcome">
            <div class="team">{match.home_team}</div>
            <div class="odd" onClick={() => this.context.createBet(match.sport, match.league, match.home_team, match.home_odd, match.matchId)}>{match.home_odd}</div>
          </div>
          <div class="outcome">
            <div class="team">{match.away_team}</div>
            <div class="odd"onClick={() => this.context.createBet(match.sport, match.league, match.away_team, match.away_odd, match.matchId)}>{match.away_odd}</div>
          </div>        
        </div>      
      </div>
      : <div className="match_view">Invalid Match Id</div>
    )
  }
}