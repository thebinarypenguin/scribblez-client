import React from 'react';

import './Home.css';

class Home extends React.Component {

  render() {

    return (

      <div id="site-container">

      <div id="home-container">

        <div id="top-nav">
          <h1>Scribblez</h1>
          <ul>
            <li><a href="/sign-up.html">Sign Up</a></li>
            <li><a href="/sign-in.html">Sign In</a></li>
          </ul>
        </div>

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
