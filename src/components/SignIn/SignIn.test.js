import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import SignIn from './SignIn';

it('renders without crashing', () => {

  const container = document.createElement('div');

  const subject = (
    <MemoryRouter>
      <SignIn />
    </MemoryRouter>
  );

  ReactDOM.render(subject, container);
  ReactDOM.unmountComponentAtNode(container);
});

it('renders the UI as expected', () => {

  const subject = (
    <MemoryRouter>
      <SignIn />
    </MemoryRouter>
  );

  const tree = renderer.create(subject).toJSON();
  expect(tree).toMatchSnapshot();
});
