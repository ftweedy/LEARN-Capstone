import React from 'react';
import ReactDOM from 'react-dom';
// import Enzyme, { mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import AuthenticatedApp from '../components/AuthenticatedApp';
// Enzyme.configure({ adapter: new Adapter() });

it('Authenticated renders', () => {
  const div = document.createElement('div');
  fetch.mockResponse(JSON.stringify([{name: 'test'}, {name: 'test2'}]))

  ReactDOM.render(<AuthenticatedApp/>, div);
});
