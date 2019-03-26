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
          <div className="FeedItemMeta">
            <div className="FeedItemAuthor"><a>{item.real_name} ({item.owner})</a></div>
            <div className="FeedItemDate">{getDateString(item)}</div>
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
