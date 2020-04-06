import React from 'react';

export default React.createContext( 
  {
    bets: [],
    matches: [],
    removeBet: () => {}
  }
);