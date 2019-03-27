import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import SignOut from './SignOut';

it('renders without crashing', () => {

  const history = {
    push: () => {},
  };

  const container = document.createElement('div');

  const subject = (
    <MemoryRouter>
      <SignOut history={history} />
    </MemoryRouter>
  )

  ReactDOM.render(subject, container);
  ReactDOM.unmountComponentAtNode(container);
});

it('renders the UI as expected', () => {

  const history = {
    push: () => {},
  };

  const subject = (
    <MemoryRouter>
      <SignOut history={history} />
    </MemoryRouter>
  )

  const tree = renderer.create(subject).toJSON();
  expect(tree).toMatchSnapshot();
});
