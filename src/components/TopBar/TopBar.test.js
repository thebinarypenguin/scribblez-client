import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import TopBar from './TopBar';

it('renders without crashing', () => {

  const container = document.createElement('div');

  const subject = (
    <MemoryRouter>
      <TopBar />
    </MemoryRouter>
  )

  ReactDOM.render(subject, container);
  ReactDOM.unmountComponentAtNode(container);
});
