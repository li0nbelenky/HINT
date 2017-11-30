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
        const currentHints = _.sortBy('title')(this.state.hints);
        _.isEqual(feedItems.activities)(currentHints)
          ? null
          : this.setState({ hints: feedItems.activities });
      });
    }, 10000);
  }

  render() {
    const hints = this.state.hints || [];
    return (
      <div className="name">
        <SemFeed>
          {hints.map((item, index) => {
            let myfollowers = item.followers || [];
            return <Hint key={item.id} followers={myfollowers} {...item} />;
          })}
        </SemFeed>
      </div>
    );
  }
}

export default Feed;
