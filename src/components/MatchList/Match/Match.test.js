import React from 'react';
import ReactDOM from 'react-dom';
import Match from './Match';

it('Match renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Match />, div);
  ReactDOM.unmountComponentAtNode(div);
});