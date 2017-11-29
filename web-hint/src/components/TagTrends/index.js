import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
// console.log(Chart);

const danielNeedToProvideMeWith = [{label: 'temp 1 label', data: [65, 59, 80, 81, 56, 55, 40]}, {label: 'temp 1 label', data: [65, 30, 80, 20, 70, 55, 10]}]
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
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
      label: 'temp 2 bla ',
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
  componentDidMount() {}
  render() {
    return (
      <div>
        {/* <canvas id="myChartZigi" width="400" height="400" /> */}
        <Line data={data} />
      </div>
    );
  }
}

export default TagTrends;
