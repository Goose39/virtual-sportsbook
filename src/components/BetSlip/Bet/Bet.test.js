import React from 'react';
import ReactDOM from 'react-dom';
import Bet from './Bet';

it('Bet renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bet />, div);
  ReactDOM.unmountComponentAtNode(div);
});