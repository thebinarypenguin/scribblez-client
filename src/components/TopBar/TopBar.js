import React from 'react';
import { Link } from 'react-router-dom';

import './TopBar.css';

class TopBar extends React.Component {

  static defaultProps = {
    links: [],
  };

  constructor(props) {

    super(props);

    this.generateLinks = this.generateLinks.bind(this);
  }

  generateLinks() {

    return this.props.links.map((link, i) => {

      return (
        <li key={i}>
          <Link to={link.target}>{link.name}</Link>
        </li>
      );
    });
  }

  render() {

    return (
      <div id="TopBar">

        <div className="Container">
          <Link to="/"><h1>Scribblez</h1></Link>
          <ul>
            { this.generateLinks() }
          </ul>
        </div>
    </div>
    );
  }
}

export default TopBar;
