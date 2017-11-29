import React, { Component } from 'react';
import _ from 'lodash/fp';
import { Button, Modal, Form, Checkbox } from 'semantic-ui-react';

class ViewHint extends Component {
  state = { open: false };

  show = size => () => {
    console.log('i was clicked');
    this.setState({ size, open: true });
  };
  close = () => this.setState({ open: false });

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <Modal trigger={<Button>Show Modal</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default ViewHint;
