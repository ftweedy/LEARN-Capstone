import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/pages/Home';

it('Home renders', () => {
  const div = document.createElement('div');
  fetch.mockResponse(JSON.stringify([{name: 'test'}, {name: 'test2'}]))

  ReactDOM.render(<Home/>, div);
});
