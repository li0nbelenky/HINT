import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import _ from 'lodash';
import config from './config';
// console.log(Chart);

const danielNeedToProvideMeWith = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  data: [
    { label: 'javascript', data: [65, 59, 80, 81, 56, 55, 40] },
    { label: 'react', data: [65, 30, 80, 20, 70, 55, 10] }
  ]
};
const mockData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'javascript',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'react',
      lineTension: 0.1,
      backgroundColor: 'rgba(12,192,120,0.4)',
      borderColor: 'rgba(75,100,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,170,192,1)',
      pointBackgroundColor: '#fdf',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 30, 80, 20, 70, 55, 10]
    }
  ]
};
// console.log(chartData);
class TagTrends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockData
    };
  }
  componentDidMount() {
    setInterval(() => {
      axios(
        `http://${config.WEBSERVER}:8000/departments_trends?status=open&department=supersonic&tags=nodejs,angular,python&time_range=3_month`
      ).then(tagTrends => {
        // check if the trends have changed

        const changed = _.isEqual(
          [...tagTrends].sort(),
          [...this.state.data].sort()
        );
        const { labels, data } = tagTrends;
        this.setState({
          ...this.state,
          data: {
            labels: labels,
            datasets: [
              {
                label: data.label,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: data
              }
            ]
          }
        });
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>Tag trends</h1>
        <Line data={this.state.data} />
      </div>
    );
  }
}

export default TagTrends;
