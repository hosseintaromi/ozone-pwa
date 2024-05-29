import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import '@/components/@base/chart/style.css';

import Props from '@/components/@base/chart/type';

export default function Chart({ labels, data, seriesName, type = 'line' }: Props) {
  const options = {
    chart: { style: { fontFamily: 'inherit' } },
    title: {
      text: '',
      style: {
        display: 'none',
      },
    },
    legend: 'none',
    xAxis: {
      lineColor: '#c4c4c4',
      tickColor: '#FFFFFF',
      categories: labels,
      labels: {
        style: {
          color: '#9ca3af',
        },
      },
    },
    yAxis: {
      lineColor: '#c4c4c4',
      lineWidth: 1,
      tickColor: '#FFFFFF',
      gridLineColor: '#FFFFFF',
      // min: 0,
      title: {
        style: {
          display: 'none',
        },
      },
      labels: {
        style: {
          color: '#9ca3af',
        },
        formatter: function (value: any) {
          return `${value.value}`;
        },
      },
    },
    plotOptions: {
      series: {
        pointWidth: 10,
        marker: {
          symbol: 'circle',
        },
      },
    },
    tooltip: {
      shared: true,
      useHTML: true,
    },
    series: [
      {
        type: type,
        name: seriesName,
        color: '#003AAF',
        data,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
