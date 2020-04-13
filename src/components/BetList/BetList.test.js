import React from 'react';
import ReactDOM from 'react-dom';
import BetList from './BetList';

it('BetList renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BetList />, div);
  ReactDOM.unmountComponentAtNode(div);
});