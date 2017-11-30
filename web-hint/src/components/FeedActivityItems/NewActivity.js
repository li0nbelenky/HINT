import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config';
import { Feed as SemFeed, Label, Card, Icon, Image, Item } from 'semantic-ui-react';

class NewActivity extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    console.log('this.props new activity');
    console.log(props);
    console.log('this.props new activity');
    this.tags = props.tags || [];
  }

  async handleClick() {
    console.log(this.props.title);
    console.log('this.props new activity');
    console.log(this.props);
    console.log('this.props new activity');
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
      <div className="NewActivity">
        <SemFeed.Event>
          <SemFeed.Label>
            <img src="./elliot.jpg" />
          </SemFeed.Label>
          <SemFeed.Content>
            <SemFeed.Summary>
              <SemFeed.User>{this.props.fullName}</SemFeed.User> Created a
              new HINT
              <SemFeed.Date>{this.props.created_ts}</SemFeed.Date>
            </SemFeed.Summary>
            <SemFeed.Extra text>{this.props.hintTitle}</SemFeed.Extra>
            {/* <SemFeed.Meta onClick={this.handleClick}> */}
            {/*   <SemFeed.Like> */}
            {/*     <Icon name="bell outline" /> */}
            {/*     {this.props.followers.length} Followers */}
            {/*   </SemFeed.Like> */}
            {/* </SemFeed.Meta> */}
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

export default NewActivity;
