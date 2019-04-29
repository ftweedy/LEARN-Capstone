import React from 'react';
import ReactDOM from 'react-dom';
import Confess from '../components/pages/Confess';

it('Confess renders', () => {
  const div = document.createElement('div');
  fetch.mockResponse(JSON.stringify([{name: 'test'}, {name: 'test2'}]))

  ReactDOM.render(<Confess/>, div);
});
