import React from 'react';

import './Feed.css';

class Feed extends React.Component {

  render() {

    return (
      <div id="site-container">

        <div id="feed-container">

          <div id="top-nav">
            <h1>Scribblez</h1>
            <ul>
              <li><a href="/sign-up.html">Sign Up</a></li>
              <li><a href="/sign-in.html">Sign In</a></li>
            </ul>
          </div>

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
