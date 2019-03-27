import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import Notes from './Notes';

it('renders without crashing', () => {

  const history = {
    push: () => {},
  };

  const container = document.createElement('div');

  const subject = (
    <MemoryRouter>
      <Notes history={history} />
    </MemoryRouter>
  )

  ReactDOM.render(subject, container);
  ReactDOM.unmountComponentAtNode(container);
});
