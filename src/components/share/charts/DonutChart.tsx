import Highcharts, { TooltipFormatterContextObject } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

import './DonutChart.css';

import Container from '../container';

const convertNumberToPersian = (number: string) => {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number.replace(/\d/g, (digit) => persianNumbers[parseInt(digit)]);
};

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
    tooltip: {
      useHTML: true, // Allows custom HTML in the tooltip
      borderColor: 'transparent',
      backgroundColor: 'transparent', // Tooltip background remains black
      borderRadius: 10,
      style: {
        fontSize: '16px',
        padding: '10px',
        // Note: No font-family specified here to inherit global styles
      },
      formatter(this: TooltipFormatterContextObject) {
        // Determine if it's a deposit ("واریز") or withdrawal ("برداشت")
        const isDeposit = this.point.name === 'واریز';
        const label = isDeposit ? 'واریز' : 'برداشت';
        const labelColor = isDeposit ? '#44D7B6' : '#FF6F48'; // Green for deposit, red for withdrawal

        const formattedNumber = convertNumberToPersian(
          this.y?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '',
        );

        return `
          <div style="background: #272B2E; padding: 10px; border-radius: 10px; font-family: 'Yekan Bakh', Tahoma, Arial;text-align: right; min-width: 125px;padding:8px 12px">
            <div style="color: ${labelColor}; font-size: 14px;">${label}</div>
            <div style="font-size: 16px; font-weight: bold; color: white;font-weight: 600;margin-top:10px">
              ${formattedNumber} ریال
            </div>
          </div>
        `;
      },
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
