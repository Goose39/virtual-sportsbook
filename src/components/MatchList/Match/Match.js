import React from 'react'
import './Match.css'

export default function Match(props) {
  return(
    <>
      <li className="match">{props.home} v {props.away}</li>
    </>
  );
}