import React from 'react';
import NotesService from '../../services/NotesService';

import './Notes.css';

class Notes extends React.Component {

  state = {
    notes: [],
  };

  componentDidMount() {
    NotesService
      .getAllNotes()
      .then((notes) => {
        this.setState({ notes });
        console.log(this.state.notes);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    return (
      <div id="site-container">

      <div id="notes-container">

        <div id="top-nav">
          <h1>Scribblez</h1>
          <ul>
            <li><a href="/home.html">Sign Out</a></li>
          </ul>
        </div>

        <form id="new-note-form">

            <textarea id="note-body" rows="1" placeholder="New note"></textarea>

            <select id="note-visibility">
              <option value="public">public</option>
              <option value="private">private</option>
            </select>

            <button id="create-note" type="submit">Create</button>


        </form>


        <ul className="note-list">
          <li className="note-with-controls">

            <div className="note-note">
              <div className="note-meta">
                <div className="note-author">Some User</div>
                <div className="note-date">Feb 4, 2019</div>
              </div>
              <div className="note-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis ex accusantium culpa maiores quibusdam est praesentium
                deleniti error nam quia, facere iste. Accusamus autem dolore, eum
                dolorem officia quo veritatis!
              </div>
            </div>

            <div className="note-controls">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>

          </li>
          <li className="note-with-controls">

            <div className="note-note">
              <div className="note-meta">
                <div className="note-author">Some User</div>
                <div className="note-date">Feb 4, 2019</div>
              </div>
              <div className="note-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis ex accusantium culpa maiores quibusdam est praesentium
                deleniti error nam quia, facere iste. Accusamus autem dolore, eum
                dolorem officia quo veritatis!
              </div>
            </div>

            <div className="note-controls">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>

          </li>
          <li className="note-with-controls">

            <div className="note-note">
              <div className="note-meta">
                <div className="note-author">Some User</div>
                <div className="note-date">Feb 4, 2019</div>
              </div>
              <div className="note-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis ex accusantium culpa maiores quibusdam est praesentium
                deleniti error nam quia, facere iste. Accusamus autem dolore, eum
                dolorem officia quo veritatis!
              </div>
            </div>

            <div className="note-controls">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>

          </li>
          <li className="note-with-controls">

            <div className="note-note">
              <div className="note-meta">
                <div className="note-author">Some User</div>
                <div className="note-date">Feb 4, 2019</div>
              </div>
              <div className="note-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis ex accusantium culpa maiores quibusdam est praesentium
                deleniti error nam quia, facere iste. Accusamus autem dolore, eum
                dolorem officia quo veritatis!
              </div>
            </div>

            <div className="note-controls">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>

          </li>
          <li className="note-with-controls">

            <div className="note-note">
              <div className="note-meta">
                <div className="note-author">Some User</div>
                <div className="note-date">Feb 4, 2019</div>
              </div>
              <div className="note-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis ex accusantium culpa maiores quibusdam est praesentium
                deleniti error nam quia, facere iste. Accusamus autem dolore, eum
                dolorem officia quo veritatis!
              </div>
            </div>

            <div className="note-controls">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>

          </li>
          <li className="note-with-controls">

            <div className="note-note">
              <div className="note-meta">
                <div className="note-author">Some User</div>
                <div className="note-date">Feb 4, 2019</div>
              </div>
              <div className="note-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis ex accusantium culpa maiores quibusdam est praesentium
                deleniti error nam quia, facere iste. Accusamus autem dolore, eum
                dolorem officia quo veritatis!
              </div>
            </div>

            <div className="note-controls">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>

          </li>
        </ul>

      </div>

    </div>
    );
  }
}

export default Notes;
