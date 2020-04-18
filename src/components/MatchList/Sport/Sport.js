import React from 'react'
import League from '../League/League'
import './Sport.css'

export default function Sport(props) {
  let leagues = Object.entries(props.leagues).map(
    league => <League key={league[0]} league={league[0]} matches={league[1]} /> 
  )     

  return(
    <>
    <div className='sport_name'>{props.sport}</div>
    <div className='sport'>
      {leagues}
    </div>
    </>
  );
}