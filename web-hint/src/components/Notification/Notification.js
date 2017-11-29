import React, { Component } from "react";
import "./Notification.css";
import NotificationSrv from "./NotificationSrv";
import {Icon, Button } from "semantic-ui-react";

class Notification extends Component {
  constructor(props) {
    super( props );
    console.log( props );
    this.state = {
      notifications: []
    };
  }
  componentDidMount() {
    setInterval( () => {
      let userID = "dm@dm.dm";
      NotificationSrv.getUserNotification( userID )
        .then( notifications => {
          console.log( notifications );
        });
      }, 1000 );
  }

  render() {
    return (
      <div className="notification">
        {this.state.notifications}
      </div>
    );
  }
}

export default Notification;
