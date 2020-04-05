import React from 'react'
import './MatchView.css';

export default function MatchView(props) {
  return (
    <main role="main" className="match_view">
      <div class="match_header">{props.tournament}</div>
      <div class="opponents">{`${props.home_team} v ${props.away_team}`}</div>
      <div class="market">
        <div class="desc">Win Match</div>
        <div class="outcome">
          <div class="team">{props.home_team}</div>
          <div class="odd" onClick={() => props.createBet(props.tournament, props.home_team, props.home_odd)}>{props.home_odd}</div>
        </div>
        <div class="outcome">
          <div class="team">{props.away_team}</div>
          <div class="odd"onClick={() => props.createBet(props.tournament, props.away_team, props.away_odd)}>{props.away_odd}</div>
        </div>        
      </div>      
    </main>
  )
}