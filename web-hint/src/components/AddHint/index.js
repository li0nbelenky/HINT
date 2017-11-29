import React, { Component } from 'react';
import _ from 'lodash/fp';
import axios from 'axios';
import {
  Button,
  Modal,
  Form,
  Checkbox,
  TextArea,
  Dropdown
} from 'semantic-ui-react';

const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' }
];

class AddHint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChangeDropDown = this.handleInputChangeDropDown.bind(this);
  }

  handleInputChange(event) {
    console.log('changing');

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleInputChangeDropDown(event, data) {
    console.log('changing');
    console.log(event);
    console.log(data.value);

    this.state.tags = [...data.value];
  }

  async handleSubmit() {
    console.log('aubmitting');
    delete this.state.size;
    delete this.state.open;

    console.log(this.state);
    console.log(this.props);

    const { title, id, subtitle } = this.props;
    let res = axios.post(`http://${config.WEBSERVER}:8000/hint/create`, {
      title,
      id,
      subtitle
    });

    console.log('clicked a like');
  }

  state = { open: false };

  show = size => () => {
    console.log('i was clicked');
    this.setState({ size, open: true });
  };
  close = () => this.setState({ open: false });

  // ['user_id', 'user_department', 'title', 'description', 'status',
  // 'tags', 'followers', 'helper', 'helper_department'];

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <a onClick={this.show('large')}>Add hint</a>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Create new hint</Modal.Header>
          <Modal.Content>
            <Form id="myform" onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Full Name</label>
                <input
                  placeholder="Name"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Position</label>
                <input
                  name="Position"
                  value={this.state.position}
                  placeholder="Position"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Department</label>
                <input
                  name="Department"
                  value={this.state.department}
                  placeholder="Department"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Hint Title</label>
                <input
                  name="hintTitle"
                  value={this.state.hintTitle}
                  placeholder="Hint Title"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Hint Description</label>
                <TextArea
                  name="Hint Description"
                  value={this.state.hintDescription}
                  placeholder="Hint Description"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Dropdown
                placeholder="Tags"
                fluid
                multiple
                selection
                options={options}
                onChange={this.handleInputChangeDropDown}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
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
