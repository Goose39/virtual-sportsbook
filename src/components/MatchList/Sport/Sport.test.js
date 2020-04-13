import React from 'react';
import ReactDOM from 'react-dom';
import Sport from './Sport';

it('Sport renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sport />, div);
  ReactDOM.unmountComponentAtNode(div);
});