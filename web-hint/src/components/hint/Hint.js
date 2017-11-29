import React, { Component } from 'react';
import axios from 'axios';
import { Feed as SemFeed, Card, Icon, Image } from 'semantic-ui-react';

class Hint extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    console.log(this.props.title);
    const { title, id, subtitle } = this.props;
    let res = axios.post('http://localhost:8000/follow', {
      title,
      id,
      subtitle
    });

    console.log('clicked a like');
  }
  render() {
    return (
      <div className="Hint">
        <SemFeed.Event>
          {/*<SemFeed.Label>*/}
          {/*<img src='/assets/images/avatar/small/elliot.jpg' />*/}
          {/*</SemFeed.Label>*/}
          <SemFeed.Content>
            <SemFeed.Summary>
              <SemFeed.User>{this.props.title}</SemFeed.User> Created a new HINT
              <SemFeed.Date>1 Hour Ago</SemFeed.Date>
            </SemFeed.Summary>
            <SemFeed.Meta onClick={this.handleClick}>
              <SemFeed.Like>
                <Icon name="like" />
                4 Likes
              </SemFeed.Like>
            </SemFeed.Meta>
          </SemFeed.Content>
        </SemFeed.Event>
      </div>
    );
  }
}

export default Hint;
