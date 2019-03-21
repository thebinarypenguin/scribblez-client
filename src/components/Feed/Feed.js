import React from 'react';
import UserContext from '../../contexts/UserContext';
import TopBar from '../TopBar/TopBar';

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

          <ul className="note-list">
            <li className="note">
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
            </li>
            <li className="note">
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
            </li>
            <li className="note">
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
            </li>
            <li className="note">
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
            </li>
            <li className="note">
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
            </li>
            <li className="note">
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
            </li>
          </ul>

        </div>

      </div>
    );
  }
}

export default Feed;
