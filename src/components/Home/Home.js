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

      <div id="site-container">

      <div id="home-container">

        <TopBar links={this.generateLinks()} />

        <div id="hero">
          <p>Hero Content</p>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          molestias dolor rem accusantium consectetur molestiae illo labore,
          officiis eius, fugit recusandae, id assumenda ipsam. Ratione explicabo
          facilis vel praesentium cumque. Doloribus sit ipsam commodi doloremque
          quisquam repellendus, tempora reiciendis fuga rem aspernatur, voluptatem
          nisi explicabo delectus dolore dicta omnis odio aliquam culpa.
        </p>

      </div>

      </div>
    );
  }
}

export default Home;
