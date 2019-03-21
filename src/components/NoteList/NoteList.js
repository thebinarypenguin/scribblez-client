import React from 'react';

import './NoteList.css';

class NoteList extends React.Component {

  static defaultProps = {
    notes: [],
  }

  constructor(props) {

    super(props);

    this.noteVisibilityEditable = React.createRef();
    this.noteBodyEditable       = React.createRef();

    this.generateItems = this.generateItems.bind(this);
  }

  generateItems() {


    return this.props.notes.map((note, i) => {

      // test
      if (note._editable) {

        return (
          <li key={i}>

            <div className="NoteContent editable">

              <div className="NoteMeta">
                <div className="NoteAuthor">
                  {note.owner}
                  <select defaultValue={note.visibility} className="noteVisibility" ref={this.noteVisibilityEditable}>
                    <option value="public">public</option>
                    <option value="private">private</option>
                  </select>
                </div>
                <div className="NoteDate">Feb 4, 2019</div>
              </div>

              <div className="NoteBody"><textarea ref={this.noteBodyEditable} defaultValue={note.body} /></div>
            </div>

            <div className="NoteControls">
              <button className="save" onClick={() => {

                this.props.onSave(note.id, {
                  body: this.noteBodyEditable.current.value,
                  visibility: this.noteVisibilityEditable.current.value,
                })
              }} >Save</button>


              <button className="cancel" onClick={() => { this.props.onCancel() }} >Cancel</button>
            </div>

          </li>
        );
      }

      // if note._editable
        // edit form with save (call prop callback) and cancel (goto /notes) buttons
        // if body is empty set to empty string '', i think that will pass the db constraints
      return (
        <li key={i}>

          <div className="NoteContent">

            <div className="NoteMeta">
              <div className="NoteAuthor">{note.owner} ({note.visibility})</div>
              <div className="NoteDate">Feb 4, 2019</div>
            </div>

            <div className="NoteBody">{note.body}</div>
          </div>

          <div className="NoteControls">
            <button className="edit" onClick={() => { this.props.onEdit(note.id) }} >Edit</button>

            <button className="delete" onClick={() => { this.props.onDelete(note.id) }} >Delete</button>
          </div>

        </li>
      );
    });
  };

  cancelChanges() {}

  render() {

    return (
      <ul className="NoteList">
        {this.generateItems()}
      </ul>
    );
  }
}

export default NoteList;
