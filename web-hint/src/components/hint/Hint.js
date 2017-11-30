import React, { Component } from 'react';
import axios from 'axios';
import NewActivity from '../FeedActivityItems/NewActivity';
import FrogMatchActivity from '../FeedActivityItems/FrogMatchActivity';
import ResolvedActivity from '../FeedActivityItems/ResolvedActivity';
import config from '../../config/config';

class Hint extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { title, id, subtitle } = this.props;
    axios.post(`http://${config.WEBSERVER}:8000/follow`, {
      title,
      id,
      subtitle
    });

    console.log('Clicked a Follow');
  }
  render() {
    if (this.props.action === 'New hint') {
      return <NewActivity key={this.props.id} {...this.props} />;
    } else if (this.props.action === 'Frog match') {
      return <FrogMatchActivity key={this.props.id} {...this.props} />;
    } else if (this.props.action === 'Resolved') {
      return <ResolvedActivity key={this.props.id} {...this.props} />;
    } else {
      return <div></div>;
    }
  }
}

export default Hint;
