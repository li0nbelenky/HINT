import React, { Component } from 'react';
import _ from 'lodash/fp';
import { Button, Modal, Form, Checkbox } from 'semantic-ui-react';

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
            <Form id="myform">
              <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
            </Form>
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
            <Button type="submit" form="myform">
              Submit
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default AddHint;
