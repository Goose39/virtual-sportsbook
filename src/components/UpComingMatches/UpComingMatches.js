import React from 'react';
import './UpComingMatches.css';
import SportsbookContext from "../../SportsbookContext";
import Match from './Match/Match'

export default class UpComingMatches extends React.Component {
  static contextType = SportsbookContext
  
  render() {
    let upcomingMatches = []
    if (this.context.upcomingMatches && this.context.upcomingMatches.length > 0) {
      upcomingMatches = this.context.upcomingMatches.map(match => 
        <Match 
          key={match.matchId}
          match_id={match.matchId} 
          home_team={match.home_team} 
          away_team={match.away_team} 
          sport={match.sport}
          league={match.league}
          start_time={match.start_time}
        />)                                  
    } else upcomingMatches = "No upcoming matches to display, check back later for updated match list";
    
    return(
      <div className="uc_matches_view">
        <header>Upcoming Matches</header>
        <section>
          <ul className='uc_match_list'>
          {upcomingMatches}
          </ul>
          
        </section>
      </div>
    );
  }
}