import React, { Component } from 'react';
import './Notification.css';
import _ from 'lodash/fp';
import NotificationSrv from './NotificationSrv';
import DefAvatar from './assets/avatar.png';
import {Icon, Button, Popup, Label, List, Image, Checkbox} from 'semantic-ui-react';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      iconType: 'alarm outline'
    };
  }
  componentDidMount() {
    // setInterval(() => {
      let userID = 'test@test.com';
      NotificationSrv.getUserNotifications(userID).then(notifications => {
        this.setState({
          items: _.sortBy('type')(notifications),
          iconType: notifications.length > 0 ? 'alarm' : 'alarm outline'
        });
      });
    // }, 1000);
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

    function ConfirmBtn(props) {
      return <Button basic color="green"
              className={"confirm-help"}
              floated="right"
      >Confirm
      </Button>
    }

    function ResolveData(props) {
      console.log(props);
      let now = new Date().getTime();
      let ts = new Date(props.ts).getTime();
      let diff = Math.floor((now - props.ts) / (60 * 1000)); //min

      return <div className={'confirm-label'}>
        <Label className={'confirm-label-text'}>{diff} min ago</Label>
      </div>
    }


    function chooseNotificationType(item) {
      if (item.type === "suggest_help"){
        return <ConfirmBtn />
      }
      if (item.type === "resolved"){
        return <ResolveData ts={item.ts}/>
      }
    }

    let content = (
      <List className="notifications-list">
        {this.state.items.reverse().map((item, index) => (
          <List.Item key={item.ts}>
            <Image avatar src={DefAvatar} />
            <Label color="orange" basic circular floating>{index + 1}</Label>
            <List.Content>
              <List.Header as="span"><b>{item.user_id}</b></List.Header>
              <List.Description>{item.hint_id}.</List.Description>
            </List.Content>
            {chooseNotificationType(item)}
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
