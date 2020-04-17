import React, { useState } from 'react';
import Match from '../Match/Match';
import './League.css';

export default function League(props) {
  const [hideMenu, setHideMenu] = useState(true);

  let matches = props.matches.map(match => <Match key={match.matchId} matchId={match.matchId} home={match.home_team} away={match.away_team}/>
)     
  return(
    <>
    <button className="league_name" onClick={() => setHideMenu(!hideMenu)}>{props.league}</button>
    {!hideMenu?
    <ul className="league">
      {matches}
    </ul>
    : null}
    </>
  );
}