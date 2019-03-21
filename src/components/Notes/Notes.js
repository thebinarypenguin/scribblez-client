import React from 'react';
import UserContext from '../../contexts/UserContext';
import TopBar from '../TopBar/TopBar';
import NoteList from '../NoteList/NoteList';

import './Notes.css';

class Notes extends React.Component {

  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    this.generateLinks = this.generateLinks.bind(this);
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
      this.props.history.push('/sign-in');
    }
  }

  render() {

    return (
      <div id="site-container">

      <div id="notes-container">

      <TopBar links={this.generateLinks()} />

        <form id="new-note-form">

            <textarea id="note-body" rows="1" placeholder="New note"></textarea>

            <select id="note-visibility">
              <option value="public">public</option>
              <option value="private">private</option>
            </select>

            <button id="create-note" type="submit">Create</button>


        </form>


        <NoteList />

      </div>

    </div>
    );
  }
}

export default Notes;
