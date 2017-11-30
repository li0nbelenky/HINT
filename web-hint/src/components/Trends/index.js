import React, { Component } from 'react';
import TopDepartment from '../TopDepartment';
import TagTrends from '../TagTrends';
import { Grid } from 'semantic-ui-react';

class Trends extends Component {
  render() {
    return (
      <Grid columns="equal">
        <Grid.Row stretched>
          <Grid.Column className="centered" width={8}>
            <TopDepartment />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column className="centered" width={8}>
            <TagTrends />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Trends;
