import React from 'react';
import { DateTime } from "luxon";
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

    const getDateString = function (item) {

      const str = item.updated_at || item.created_at;
      return DateTime.fromISO(str).toLocaleString(DateTime.DATE_MED);
    };

    return this.state.items.map((item, i) => {

      return (
        <li key={i}>
          <div className="FeedItem">
          <div className="FeedItemMeta">
            <div className="FeedItemAuthor">{item.real_name} ({item.owner})</div>
            <div className="FeedItemDate">{getDateString(item)}</div>
          </div>
          <div className="FeedItemBody">{item.body}</div>
          </div>
        </li>
      );
    });
  };

  render() {

    return (
      <div className="Container">
      <ul className="FeedList">
        {this.generateItems()}
      </ul>
      </div>
    );
  }
}

export default FeedList;
