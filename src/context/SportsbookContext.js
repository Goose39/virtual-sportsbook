import React from 'react';

export default React.createContext( 
  {
    bets: [],
    matches: {},
    betHistory: [],
    upcomingMatches: [],
    removeBet: () => {}
  }
);