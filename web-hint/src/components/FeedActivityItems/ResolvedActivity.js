import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config';
import { Feed as SemFeed, Label, Card, Icon, Image } from 'semantic-ui-react';

class ResolvedActivity extends Component {
  constructor(props) {
    super(props);
    this.tags = props.tags || [];
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
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
      <div className="ResolvedActivity">
        <SemFeed.Event>
          <SemFeed.Label>
            <img src="./elliot.jpg" />
          </SemFeed.Label>
          <SemFeed.Content>
            <SemFeed.Summary>
              <SemFeed.User>
                {this.props.helper_full_name || 'John Doe'}
              </SemFeed.User>{' '}
              Helped resolve <SemFeed.User>{this.props.fullName}</SemFeed.User>'s
              hint, and is now a prince!
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

export default ResolvedActivity;
