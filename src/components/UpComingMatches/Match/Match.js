import React from 'react';
import './Match.css';
import { Link } from 'react-router-dom';
import Moment from 'moment';

export default function Match(props) {
  const start_time = Moment(props.start_time)
  const tillMatch = Moment(start_time).fromNow();
  return(
    <li className="uc-match">
      <div className='uc_sport'>{props.sport}</div>
      <div className='uc_league'>{props.league}</div>
      <div className='uc_desc'>{
        <Link 
          key={`link-${props.match_id}`} 
          to={`/match/${props.match_id}`}>{props.home_team} v {props.away_team}
        </Link>}
      </div>   
      <div className='uc_start'>
        {tillMatch}
      </div>
    </li>
  );
}