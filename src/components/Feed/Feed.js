import React from 'react';
import UserContext from '../../contexts/UserContext';
import TopBar from '../TopBar/TopBar';
import FeedList from '../FeedList/FeedList';
import Utils from '../../services/Utils';

import './Feed.css';

class Feed extends React.Component {

  static contextType = UserContext;

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
      <div id="Feed">
        <TopBar links={this.generateLinks()} />
        <FeedList />
      </div>
    );
  }
}

export default Feed;
