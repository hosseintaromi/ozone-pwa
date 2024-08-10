import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

import './DonutChart.css';

import Container from '../container';
const PieChart = ({
  data,
}: {
  data: {
    name: string;
    y: number | undefined;
  }[];
}) => {
  const options = {
    chart: {
      with: '25px',
      height: '235px',
      type: 'pie',
      custom: {},
      events: {},
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    title: {
      text: '',
    },

    legend: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        },
        borderColor: '#272C2F',
        borderWidth: 10,
      },
      series: {
        colors: ['#24C8B0', '#FF8C6D'],
        allowPointSelect: true,
        cursor: 'pointer',

        borderRadius: 20,
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: 'ریال',
        colorByPoint: true,
        innerSize: '60%',
        size: '220px',
        data: data,
      },
    ],
  };

  return (
    <Container className='min-h-60'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
};

export default PieChart;
