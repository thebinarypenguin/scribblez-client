import React from 'react';
import UserContext from '../../contexts/UserContext';
import TopBar from '../TopBar/TopBar';
import Utils from '../../services/Utils';

import './Home.css';

class Home extends React.Component {

  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.generateLinks = this.generateLinks.bind(this);
  }

  generateLinks() {

    let links = [];

    if (Utils.isTokenActive(window.localStorage.getItem('token'))) {

      links = [
        { name: 'Feed',     target: '/feed'     },
        { name: 'Notes',    target: '/notes'    },
        { name: 'Sign Out', target: '/sign-out' },
      ];

    } else {

      links = [
        { name: 'Feed',    target: '/feed'    },
        { name: 'Sign Up', target: '/sign-up' },
        { name: 'Sign In', target: '/sign-in' },
      ];
    }

    return links;
  }

  render() {

    return (
      <div id="Home">

        <TopBar links={this.generateLinks()} />

        <div className="Container">

          <p>
            Scribblez is a note-sharing service that allows you to share your
            ideas with the world. Don't like sharing? That's okay you can make
            your notes private. We won't tell anyone.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
