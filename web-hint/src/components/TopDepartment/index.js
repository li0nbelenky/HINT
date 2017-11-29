import React, { Component } from 'react';
import Chart from 'chart.js';
import { HorizontalBar } from 'react-chartjs-2';
// console.log(Chart);

const danielNeedsToGiveMeThis = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  data: [65, 59, 80, 81, 56, 55, 40]
};
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
  componentDidMount() {}
  render() {
    return (
      <div className="Trends">
        <h1>Trends - bar chart department</h1>
        hihihi
        <div>
          {/* <canvas id="myChartZigi" width="400" height="400" /> */}
          <HorizontalBar data={data} />
        </div>
      </div>
    );
  }
}

export default TopDepartment;
