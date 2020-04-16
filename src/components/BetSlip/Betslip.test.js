import React from 'react';
import ReactDOM from 'react-dom';
import Betslip from './Betslip';

const bets = [
  {
    league: "Premier League",
    betId: "9dd592c2-df90-4426-a859-d650fbb85560",
    team: "Liverpool",
    price: 1.25, 
    stake: 100,
    teamId: 1,
    match_desc: "Liverpool v Man. Utd"
  },
  {
    league: "Premier League",
    betId: "9dd592c2-df90-4426-a859-d6522bb85560",
    team: "Liverpool",
    price: 2.85, 
    stake: 100,
    teamId: 2,
    match_desc: "Liverpool v Man. Utd"
  },
]

it('Betslip renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Betslip bets={bets} />, div);
  ReactDOM.unmountComponentAtNode(div);
});