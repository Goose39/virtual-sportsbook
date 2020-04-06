import React from 'react'
import './Match.css'
import { Link } from 'react-router-dom'

export default function Match(props) {
  return(
      <li className="match">
        <Link to={`/match/${props.matchId}`}>{props.home} v {props.away}</Link>
      </li>
  );
}