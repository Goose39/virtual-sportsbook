import React from 'react';
import ReactDOM from 'react-dom';
import LoginOptions from './LoginOptions';

it('LoginOptions renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginOptions />, div);
  ReactDOM.unmountComponentAtNode(div);
});