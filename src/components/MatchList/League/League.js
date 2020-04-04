import React from 'react'
import Match from '../Match/Match'
import './League.css'

export default function League(props) {
  let matches = props.matches.map(match => <Match home={match.home_team} away={match.away_team}/>
)     
  return(
    <ul className="league">{props.league}
      {matches}
    </ul>
  );
}