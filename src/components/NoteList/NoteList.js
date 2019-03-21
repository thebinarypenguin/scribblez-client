import React from 'react';

import './NoteList.css';

class NoteList extends React.Component {

  static defaultProps = {
    notes: [],
  }

  constructor(props) {

    super(props);

    this.generateItems = this.generateItems.bind(this);
  }

  generateItems() {

    return this.props.notes.map((note, i) => {

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
