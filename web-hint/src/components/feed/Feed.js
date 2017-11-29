import React, { Component } from 'react';
import './Feed.css';
import Hint from '../hint/Hint';
import FeedConsumer from './FeedConsumer';
import { Feed as SemFeed, Icon } from 'semantic-ui-react';

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
        this.setState({ hints: feedItems.payload });
      });
    }, 1000);
  }

  render() {
    return (
      <SemFeed>
        {this.state.hints.map((item, index) => <Hint {...item} />)}
      </SemFeed>
    );
  }
}

export default Feed;
