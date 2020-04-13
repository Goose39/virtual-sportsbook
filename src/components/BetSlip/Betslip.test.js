import React from 'react';
import ReactDOM from 'react-dom';
import Betslip from './Betslip';

it('Betslip renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Betslip />, div);
  ReactDOM.unmountComponentAtNode(div);
});