import React from 'react';
import NotesService from '../../services/NotesService';

import './NoteList.css';

class NoteList extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      notes: [],
    };

    this.generateItems = this.generateItems.bind(this);
  }

  componentDidMount() {

    NotesService
      .getAllNotes()
      .then((notes) => {
        this.setState({ notes });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  generateItems() {

    return this.state.notes.map((note, i) => {

      return (
        <li key={i}>

          <div className="NoteContent">

            <div className="NoteMeta">
              <div className="NoteAuthor">{note.owner}</div>
              <div className="NoteDate">Feb 4, 2019</div>
            </div>

            <div className="NoteBody">{note.body}</div>
          </div>

          <div className="NoteControls">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>

        </li>
      );
    });
  };

  render() {

    return (
      <ul className="NoteList">
        {this.generateItems()}
      </ul>
    );
  }
}

export default NoteList;
