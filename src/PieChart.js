import React from 'react';
import Chart from 'react-apexcharts';
import './App.css'
const PieChart = ({ data }) => {
    const successfulMissions = data.filter((mission) => mission.successful);
    const successfulCount = successfulMissions.length;
    const unsuccessfulCount = data.length - successfulCount;
    const totalCount = data.length;
    const chartData = {
        series: [successfulCount, unsuccessfulCount],
        options: {
            labels: ['Successful', 'Unsuccessful'],
            colors: ['#008ffb', 'rgba(0,227,150,1)'],
            legend: {
                position: 'right',
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],

        },
    };

    return (
        <div>
            <h2>Mission Success</h2>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                width="480"
            />
            <div  className='total-count'>
                <p> Total Count</p>
                <p style={{ marginLeft: "17px" }}> {totalCount}</p>
            </div>
        </div>
    );
};
export default PieChart;
