import React from 'react';
import UserContext from '../../contexts/UserContext';
import TopBar from '../TopBar/TopBar';
import FeedList from '../FeedList/FeedList';

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

  render() {

    return (
      <div id="site-container">

        <div id="feed-container">

          <TopBar links={this.generateLinks()} />

          <FeedList />

        </div>

      </div>
    );
  }
}

export default Feed;
