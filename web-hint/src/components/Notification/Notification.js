import React, { Component } from 'react';
import './Notification.css';
import _ from 'lodash/fp';
import NotificationSrv from './NotificationSrv';
import DefAvatar from './assets/avatar.png';
import {
  Icon,
  Button,
  Popup,
  Label,
  List,
  Image,
  Checkbox
} from 'semantic-ui-react';

class Notification extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      items: [],
      iconType: 'alarm outline'
    };
  }
  componentDidMount() {
    setInterval(() => {
      let userID = 'test@test.com';
      NotificationSrv.getUserNotifications(userID).then(notifications => {
        this.setState({
          items: _.sortBy('type')(notifications),
          iconType: notifications.length > 0 ? 'alarm' : 'alarm outline'
        });
      });
    }, 1000);
  }

  render() {
    let trigger = (
      <span className="notification-trigger">
        <Button circular icon={this.state.iconType} />
        <Label color="orange" basic circular floating>
          {this.state.items.length}
        </Label>
      </span>
    );

    let content = (
      <List className="notifications-list">
        {this.state.items.map(item => (
          <List.Item>
            <Image avatar src={DefAvatar} />
            <Label color="orange" basic circular floating>
              {this.state.items.length}
            </Label>
            <List.Content>
              <List.Header as="a">User Name</List.Header>
              <List.Description>{item.hint_id}.</List.Description>
            </List.Content>
            <Checkbox />
          </List.Item>
        ))}
      </List>
    );

    return (
      <div className={'notification-wrapper'}>
        <Popup
          header="Notifications"
          trigger={trigger}
          content={content}
          on="click"
        />
      </div>
    );
  }
}

export default Notification;
