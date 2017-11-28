import React, { Component } from 'react';
import {Feed as SemFeed, Card, Icon, Image} from 'semantic-ui-react';

class Hint extends Component {
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
            <SemFeed.Meta>
              <SemFeed.Like>
                <Icon name='like' />
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
