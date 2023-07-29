import React from "react";
import ReactApexChart from "react-apexcharts";

class SalesChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'line'
        },
        series: [{
          name: 'sales',
          data: [30,40,35,50,49,60,70,91,125]
        }],
        xaxis: {
          categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        },
    responsive: [
    {
      breakpoint: 1000,
      options: {
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ],
        stroke: {
          curve: 'smooth',
        },
        animations: {
          enabled: true,
          easing: 'linear',
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
        }
    }
}
      };
    };
  render() {
    return (
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.options.series} type="line" />
        </div>
    );
  }
}

export default SalesChart;
