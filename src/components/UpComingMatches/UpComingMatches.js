import React, {useEffect, useState} from 'react';
import './UpComingMatches.css';
import MatchesApiService from '../../services/matches-api-service'
import Match from './Match/Match'

export default function UpComingMatches() {

  const [error, setError] = useState(null);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    MatchesApiService.getUpcomingMatches()
    .then(matches => setMatches(matches))
    .catch(error => setError('Cannot get matches at this time'))
  }, []) 
    
    let upcomingMatches;

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
    } else upcomingMatches = 'No upcoming matches to display, check back later for updated match list';
   
    return(
      
      <div className='uc_matches_view'>
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