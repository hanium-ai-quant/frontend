import React from "react";
import Chart from "react-apexcharts";

const mockData = {
    data: [
        {
            x: "02-10-2017 GMT",
            y: 34
        },
        {
            x: "02-11-2017 GMT",
            y: 43
        },
        {
            x: "02-12-2017 GMT",
            y: 31
        },
        {
            x: "02-13-2017 GMT",
            y: 43
        },
        {
            x: "02-14-2017 GMT",
            y: 33
        },
        {
            x: "02-15-2017 GMT",
            y: 52
        }
    ]
};

const dataSeries = mockData.data.map(item => ({ x: item.x, y: item.y }));

class BigChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'line'
                },
                series: [{
                    name: 'prices',
                    data: dataSeries,
                }],
                xaxis: {
                    type: 'datetime',
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
            },
        };
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.options.series}
                type="line" />
        );
    }
}

export default BigChart;

