import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import FeedList from './FeedList';

it('renders without crashing', () => {

  const container = document.createElement('div');

  const subject = (
    <MemoryRouter>
      <FeedList />
    </MemoryRouter>
  );

  ReactDOM.render(subject, container);
  ReactDOM.unmountComponentAtNode(container);
});

it('renders the UI as expected', () => {

  const subject = (
    <MemoryRouter>
      <FeedList />
    </MemoryRouter>
  );

  const tree = renderer.create(subject).toJSON();
  expect(tree).toMatchSnapshot();
});
