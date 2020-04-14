import React from 'react';
import ReactDOM from 'react-dom';
import UpComingMatches  from './UpComingMatches';

it('UpComingMatches renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpComingMatches />, div);
  ReactDOM.unmountComponentAtNode(div);
});