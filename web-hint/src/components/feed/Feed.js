import React, { Component } from 'react';
import './Feed.css';
import FeedConsumer from './FeedConsumer';
import _ from 'lodash/fp';
import Hint from '../hint/Hint';
import { Feed as SemFeed, Icon, Button, Modal } from 'semantic-ui-react';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      hints: []
    };
  }
  componentDidMount() {
    setInterval(() => {
      FeedConsumer.getFeedItems().then(feedItems => {
        feedItems = _.sortBy('title')(feedItems.payload);
        const currentHints = _.sortBy('title')(this.state.hints);
        _.isEqual(feedItems)(currentHints)
          ? null
          : this.setState({ hints: feedItems });
      });
    }, 1000);
  }

  render() {
    return (
      <div className="name">
        <SemFeed>
          {this.state.hints.map((item, index) => (
            <Hint key={item.id} {...item} />
          ))}
        </SemFeed>
      </div>
    );
  }
}

export default Feed;
