import React from 'react';
import ReactDOM from 'react-dom';
import Match from './Match';
import { BrowserRouter } from 'react-router-dom';

it('Match renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Match /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});