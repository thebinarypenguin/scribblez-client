import React from 'react';
import FeedService from '../../services/FeedService';

import './FeedList.css';

class FeedList extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      items: [],
    };

    this.generateItems = this.generateItems.bind(this);
  }

  componentDidMount() {

    FeedService
      .getGlobalFeed()
      .then((items) => {
        this.setState({ items });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  generateItems() {

    return this.state.items.map((item, i) => {

      return (
        <li key={i}>
          <div className="FeedItemMeta">
            <div className="FeedItemAuthor">{item.owner}</div>
            <div className="FeedItemDate">Feb 4, 2019</div>
          </div>
          <div className="FeedItemBody">{item.body}</div>
        </li>
      );
    });
  };

  render() {

    return (
      <ul className="FeedList">
        {this.generateItems()}
      </ul>
    );
  }
}

export default FeedList;
