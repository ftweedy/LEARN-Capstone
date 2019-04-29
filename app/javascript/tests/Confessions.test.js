import React from 'react';
import ReactDOM from 'react-dom';
import Confessions from '../components/pages/Confessions';

it('Confessions renders', () => {
  const div = document.createElement('div');
  fetch.mockResponse(JSON.stringify([{name: 'test'}, {name: 'test2'}]))

  ReactDOM.render(<Confessions current_user={id: 1}/>, div);
});
