import React from 'react';
import Sport from './Sport/Sport';
import './MatchList.css';

export default function MatchList(props) {
  let sports = Object.keys(props.matches)
                .map(sport => 
                  <Sport 
                    sport={sport} 
                    leagues={props.matches[sport].leagues}
                  /> )     

  return(
    <section className="match_list">
      {sports}
    </section>
  );
}