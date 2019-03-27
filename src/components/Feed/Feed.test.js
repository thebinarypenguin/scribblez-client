import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import Feed from './Feed';

it('renders without crashing', () => {

  const container = document.createElement('div');

  const subject = (
    <MemoryRouter>
      <Feed />
    </MemoryRouter>
  )

  ReactDOM.render(subject, container);
  ReactDOM.unmountComponentAtNode(container);
});
