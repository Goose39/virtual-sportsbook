import React from 'react';
import ReactDOM from 'react-dom';
import League from './League';

it('League renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<League />, div);
  ReactDOM.unmountComponentAtNode(div);
});