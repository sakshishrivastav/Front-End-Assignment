import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ data }) => {
  const companyCounts = {};
  data.forEach((mission) => {
    const { company } = mission;
    if (!companyCounts[company]) {
      companyCounts[company] = 0;
    }
    companyCounts[company] += 1;
  });
  const companyNames = Object.keys(companyCounts);
  const missionCounts = companyNames.map((company) => companyCounts[company]);

  const chartData = {
    series: [
      {
        name: 'Missions',
        data: missionCounts,
      },
    ],
      options: {
    
      chart: {
        type: 'bar',
              height: 250,
              toolbar: {
                show: false
            },
        },
        
        
        tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
          },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: companyNames,
      },
      yaxis: {
        title: {
          text: 'Missions',
        },
      },
      legend: {
        position: 'top',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
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
      <h2>Number of Missions by Company</h2>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="100%"
      />
    </div>
  );
};

export default BarChart;
