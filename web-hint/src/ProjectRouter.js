import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Menu, Dropdown, Button} from 'semantic-ui-react';
import App from './App';
import AddHint from './components/AddHint';
import Notification from './components/Notification/Notification';
import Trends from './components/Trends'

const Home = () => (
  <div>

    <App />
  </div>
);

const ProjectRouter = () => (
  <Router>
    <div>
      <Menu>
        <Menu.Item header> 💡 HELP is what I NEED, THANKS</Menu.Item>
        <Menu.Item as={Link} to='/'>
          <AddHint />
        </Menu.Item>
        <Menu.Item as={Link} to='/'>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to='/trends'>
          Trends
        </Menu.Item>
        <Dropdown item text='Language'>
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Russian</Dropdown.Item>
            <Dropdown.Item>Spanish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item position='right'>
          <Notification />
        </Menu.Item>
      </Menu>
      <hr/>
      <Route exact path="/" component={Home}/>
        <Route exact path="/trends" component={Trends}/>
    </div>
  </Router>
);
export default ProjectRouter
