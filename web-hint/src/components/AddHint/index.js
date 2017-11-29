import React, { Component } from 'react';
import _ from 'lodash/fp';
import { Button, Modal } from 'semantic-ui-react';

class AddHint extends Component {
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
        <a onClick={this.show('large')}>Add hint</a>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yes"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default AddHint;
