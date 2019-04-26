import React from 'react';
import ReactDOM from 'react-dom';
import UnauthenticatedApp from '../components/UnauthenticatedApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  fetch.mockResponse(JSON.stringify([{name: 'test'}, {name: 'test2'}]))

  ReactDOM.render(<UnauthenticatedApp />, div);
});
