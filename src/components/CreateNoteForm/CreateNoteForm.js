import React from 'react';

class CreateNoteForm extends React.Component {

  constructor(props) {

    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {

    ev.preventDefault();

    const body       = ev.target['note-body'].value;
    const visibility = ev.target['note-visibility'].value;

    this.props.onSubmit({ body, visibility });
  }

  render() {

    return (

      <form id="new-note-form" onSubmit={this.handleSubmit}>

        <textarea id="note-body" rows="1" placeholder="New note"></textarea>

        <select id="note-visibility">
          <option value="public">public</option>
          <option value="private">private</option>
        </select>

        <button id="create-note" type="submit">Create</button>

    </form>
    )
  }
}

export default CreateNoteForm;
