import React from 'react';
import ReactDOM from 'react-dom';
import MatchView from './MatchView';
import { BrowserRouter } from 'react-router-dom';

it('MatchView renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><MatchView /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});