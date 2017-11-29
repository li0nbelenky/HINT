import React, { Component } from 'react';
import './Feed.css';
import Hint from '../hint/Hint';
import FeedConsumer from './FeedConsumer';
import _ from 'lodash/fp';
import { Feed as SemFeed, Icon, Button } from 'semantic-ui-react';

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
          ? console.log('no change')
          : this.setState({ hints: feedItems });
      });
    }, 1000);
  }

  render() {
    return (
      <div className="name">
        <SemFeed>
          {this.state.hints.map((item, index) => <Hint {...item} />)}
        </SemFeed>
        <Button onClick={console.log('i was clicked!')}>Add hint</Button>
      </div>
    );
  }
}

export default Feed;
