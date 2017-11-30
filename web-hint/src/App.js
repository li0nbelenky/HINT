import React, { Component } from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import TopTables from './components/TopTables';
import LatestHintReqsTable from './components/LatestHintReqsTable';
import AddHint from './components/AddHint';
import { Grid, Image, Segment, Menu, Container} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Grid columns='equal'>
       <Grid.Row stretched>
       <Grid.Column>
       </Grid.Column>
      <Grid.Column width={6}>
          <Feed />
        </Grid.Column>
        <Grid.Column width={3}>
          <Segment>
            <TopTables />
          </Segment>
          <Segment>
            <LatestHintReqsTable />
          </Segment>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
