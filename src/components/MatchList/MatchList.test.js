import React from 'react';
import ReactDOM from 'react-dom';
import MatchList from './MatchList';

it('MatchList renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MatchList />, div);
  ReactDOM.unmountComponentAtNode(div);
});