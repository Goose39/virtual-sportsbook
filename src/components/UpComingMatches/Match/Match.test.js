import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

it('Navbar renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});