import React from 'react';
import ReactDOM from 'react-dom';
import MatchView from './MatchView';

it('MatchView renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MatchView />, div);
  ReactDOM.unmountComponentAtNode(div);
});