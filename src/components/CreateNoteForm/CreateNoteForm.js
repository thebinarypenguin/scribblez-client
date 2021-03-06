import React from 'react';

import './CreateNoteForm.css';

class CreateNoteForm extends React.Component {

  constructor(props) {

    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {

    ev.preventDefault();

    const body       = ev.target['note-body'].value;
    const visibility = ev.target['note-visibility'].value;

    ev.target['note-body'].value = '';
    ev.target['note-visibility'].value = 'public';

    this.props.onSubmit({ body, visibility });
  }

  render() {

    return (
      <div className="Container">
      <form id="CreateNoteForm" onSubmit={this.handleSubmit}>

        <textarea id="note-body" rows="1" placeholder="New note"></textarea>

        <select id="note-visibility">
          <option value="public">public</option>
          <option value="private">private</option>
        </select>

        <button id="create-note" type="submit">Create</button>

    </form>
    </div>
    )
  }
}

export default CreateNoteForm;
