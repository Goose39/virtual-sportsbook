import React from 'react';
import ReactDOM from 'react-dom';
import Sport from './Sport';
import { matches } from '../../../store'
import { BrowserRouter } from 'react-router-dom';

it('Sport renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Sport leagues={matches["Soccer"].leagues} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});