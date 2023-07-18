import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';



function Chart() {
    const options = {
      title: {
        text: 'My chart'
      },
      subtitle: {
        text: 'abcs',
      },
      plotOptions: {
        series: {
          enableMouseTracking: false
        },
        column: {
          shadow: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      xAxis: {
        type: 'linear',
        lineWidth: 0,
        tickInterval: 6,
        categories: ['9h', '', '', '', '', '', '10h', '', '', '', '', '', '11h', '', '', '', '', '', '12h', '', '', '', '', '', '13h', '', '', '', '', '', '14h', '', '', '', '', '', '15h']
      },
      yAxis: {
        type: 'linear',
        tickInterval: 5,
        labels: {
          enabled: false,
        },
        categories: ['Apples', 'Bananas', 'Oranges','klasjhd','Apples', 'Bananas', 'Oranges','klasjhd','Apples', 'Bananas', 'Oranges','klasjhd']
      },
      series: [{
        type: 'areaspline',
        color: 'red',
        fillColor: {
          linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
          },  
          stops: [
              [0, Highcharts.color('#eb878f').setOpacity(0.9).get('rgba')],
              [1, Highcharts.color('white').setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 0,
        },
        data: [12, 22, 32,17,22,18,29,32,42, 22.4, 22, 32,17,22,18,29,32,42,12, 22, 32,17,22,18,29,32,42,12, 22, 32,17,22,18,29,32,42,12, 22, 32,17,22,18,29,32,42,]
      },
      {
        type: 'column',
        name: 'abc',
        color: 'lightGrey',
        borderWidth: 0,
        data: [1, 2, 3,7,2,8,9,3,4,1, 2, 3,7,2,8,9,3,4,1, 2, 3,7,2,8,9,3,4,1, 2, 3,7,2,8,9,3,4,1, 2, 3,7,2,8,9,3,4,]
      }]
    }
  return (
    <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
  )
}

export default Chart;
