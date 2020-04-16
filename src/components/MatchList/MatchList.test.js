import React from 'react';
import ReactDOM from 'react-dom';
import MatchList from './MatchList';
import { BrowserRouter } from 'react-router-dom';

it('MatchList renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><MatchList /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});