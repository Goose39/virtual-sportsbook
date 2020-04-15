import React from 'react'
import Match from '../Match/Match'
import './League.css'

export default function League(props) {
  let matches = props.matches.map(match => <Match key={match.matchId} matchId={match.matchId} home={match.home_team} away={match.away_team}/>
)     
  return(
    <>
    <div className="league_name">{props.league}</div>
    <ul className="league">
    
      {matches}
    </ul>
    </>
  );
}