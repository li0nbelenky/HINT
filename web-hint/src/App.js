import React, { Component } from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import TopTables from './components/TopTables';
import LatestHintReqsTable from './components/LatestHintReqsTable';
import Notification from './components/Notification/Notification';
import AddHint from './components/AddHint';
import { Grid, Image, Segment, Menu, Container} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container>
        <Menu fixed='top' size='large'>
          <Container>
            <Menu.Menu position='right'>
              <Menu.Item className='item'>
                <Notification />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
        <Grid columns='equal'>
         <Grid.Row stretched>
         <Grid.Column>
         </Grid.Column>
        <Grid.Column width={6}>
            <Feed />
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <TopTables />
            </Segment>
            <Segment>
              <LatestHintReqsTable />
            </Segment>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
