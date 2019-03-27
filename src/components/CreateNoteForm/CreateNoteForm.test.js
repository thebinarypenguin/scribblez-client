import React from 'react';
import ReactDOM from 'react-dom';
import CreateNoteForm from './CreateNoteForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateNoteForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
