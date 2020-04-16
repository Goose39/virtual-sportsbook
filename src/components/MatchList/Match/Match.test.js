import React from 'react';
import ReactDOM from 'react-dom';
import Match from './Match';
import { BrowserRouter } from 'react-router-dom';
import { sportsData } from '../../../store';

it('Match renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Match match={sportsData["Soccer"].leagues['Premier League'].matches[0]}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});