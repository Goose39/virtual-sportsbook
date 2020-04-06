import React from 'react'
import './Match.css'

export default function Match(props) {
  return(
    <>
      <li className="match"><a href={`/match/${props.matchId}`}>{props.home} v {props.away}</a></li>
    </>
  );
}