import React from 'react';
import ReactDOM from 'react-dom';
import League from './League';
import { matches } from '../../../store';
import { BrowserRouter } from 'react-router-dom';

it('League renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><League matches={matches["Soccer"].leagues["Premier League"]} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});