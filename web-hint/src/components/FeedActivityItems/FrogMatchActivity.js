import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config';
import { Feed as SemFeed ,Label} from 'semantic-ui-react';

class FrogMatchActivity extends Component {
  constructor(props) {
    console.log('frog activity');
    super(props);
    console.log(props);
    console.log('frog activity');
    this.tags = props.tags || [];

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    console.log(this.props.title);
    const { title, id, subtitle } = this.props;
    let res = axios.post(`http://${config.WEBSERVER}:8000/follow`, {
      title,
      id,
      subtitle
    });

    console.log('clicked a like');
  }
  render() {
    return (
      <div className="FrogMatchActivity">
        <SemFeed.Event>
          <SemFeed.Label>
            <img src="./elliot.jpg" />
          </SemFeed.Label>
          <SemFeed.Content>
            <SemFeed.Summary>
              Froggy with id of {this.props.helper_id} from{' '}
              <SemFeed.User>{this.props.helper_dep}</SemFeed.User> was matched
              to help <SemFeed.User>{this.props.fullName}</SemFeed.User>'s hint
              <SemFeed.Date>{this.props.updated_ts}</SemFeed.Date>
            </SemFeed.Summary>
            <SemFeed.Extra text>{this.props.hintTitle}</SemFeed.Extra>
          </SemFeed.Content>
        </SemFeed.Event>
          {
              this.tags.map((item, index) =>
              {return <Label as='a' color='teal' tag> {item} </Label>})
          }
      </div>
    );
  }
}

export default FrogMatchActivity;
