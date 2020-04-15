import React from 'react';
import './UpComingMatches.css';
import MatchesApiService from "../../services/matches-api-service"
import Match from './Match/Match'

export default class UpComingMatches extends React.Component {
  state = { 
    error: null,
    matches: []
  }

  componentDidMount() {
    MatchesApiService.getUpcomingMatches()
    .then(matches => this.setState({matches}))
    .catch(error => this.setState({error: "Cannot get matches at this time"}))
  }
    
  render() {
    let upcomingMatches;
    let matches = this.state.matches

    if (matches && matches.length > 0)  {
      upcomingMatches = matches.map(match => 
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
   
    const { error } = this.state
    return(
      
      <div className="uc_matches_view">
        <header>Upcoming Matches</header>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <section>
          <ul className='uc_match_list'>
          {upcomingMatches}
          </ul>
          
        </section>
      </div>
    );
  }
}