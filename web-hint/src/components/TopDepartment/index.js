import React, { Component } from 'react';
import Chart from 'chart.js';
import { HorizontalBar } from 'react-chartjs-2';
import axios from 'axios';
import config from '../../config/config';
import _ from 'lodash';

const danielNeedsToGiveMeThisForTopDepartments = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  data: [65, 59, 80, 81, 56, 55, 40]
};
const data = {
  labels: ['search', 'mobile', 'installCore', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

// console.log(chartData);
class TopDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  componentWillUnmount() {
    // clearInterval(this.intervalId);
  }
  componentDidMount() {
    // this.intervalId = setInterval(() => {
    //   axios(
    //     `http://${config.WEBSERVER}:8000/departments_impact`
    //   ).then(departmentsData => {
    //     const { labels, data } = departmentsData;
    //     const changed = _.isEqual(
    //       [...departmentsData].sort(),
    //       [...this.state.data].sort()
    //     );
    //     changed
    //       ? this.setState({
    //           ...this.state,
    //           data: {
    //             labels: labels,
    //             datasets: [
    //               {
    //                 label: 'My First dataset',
    //                 backgroundColor: 'rgba(255,99,132,0.2)',
    //                 borderColor: 'rgba(255,99,132,1)',
    //                 borderWidth: 1,
    //                 hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //                 hoverBorderColor: 'rgba(255,99,132,1)',
    //                 data: data
    //               }
    //             ]
    //           }
    //         })
    //       : console.log('no change needed');
    //   });
    // }, 1000);
  }
  render() {
    return (
      <div className="Trends">
        <div>
          <h1>Top departments</h1>
          <HorizontalBar data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default TopDepartment;
