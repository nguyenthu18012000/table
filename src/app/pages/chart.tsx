import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';



function Chart() {
    const options = {
        chart: {
            type: 'pie',
            renderTo: 'atmospheric-composition'
          },
        title: {
          text: 'My chart'
        },
        series: [{
          data: [1, 2, 3,7,2,8,9,3,4]
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
