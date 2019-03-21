import React from 'react';
import UserContext from '../../contexts/UserContext';
import TopBar from '../TopBar/TopBar';
import CreateNoteForm from '../CreateNoteForm/CreateNoteForm';
import NoteList from '../NoteList/NoteList';
import NotesService from '../../services/NotesService';

import './Notes.css';

class Notes extends React.Component {

  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    this.generateLinks = this.generateLinks.bind(this);
    this.createNote    = this.createNote.bind(this);
    this.deleteNote    = this.deleteNote.bind(this);
  }

  generateLinks() {

    let links = [];

    if (this.context.user) {

      links = [
        { name: 'Feed',     target: '/feed'     },
        { name: 'Notes',    target: '/notes'    },
        { name: 'Sign Out', target: '/sign-out' },
      ];

    } else {

      links = [
        { name: 'Sign Up', target: '/sign-up' },
        { name: 'Sign In', target: '/sign-in' },
      ];
    }

    return links;
  }

  componentDidMount() {

    if (!this.context.user) {
      return this.props.history.push('/sign-in');
    }

    NotesService
      .getAllNotes()
      .then((notes) => {

        this.setState({ notes });
      })
  }

  createNote(payload) {

    NotesService
      .createNote(payload)
      .then((id) => {

        return NotesService
        .getAllNotes()
        .then((notes) => {

          this.setState({ notes });
        })
      });
  }

  deleteNote(noteId) {

  }

  render() {

    return (
      <div id="site-container">

        <div id="notes-container">

          <TopBar links={this.generateLinks()} />

          <CreateNoteForm onSubmit={this.createNote}/>

          <NoteList notes={this.state.notes} />

        </div>

    </div>
    );
  }
}

export default Notes;
