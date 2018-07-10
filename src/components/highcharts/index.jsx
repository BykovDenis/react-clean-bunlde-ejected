import React from 'react';
import ReactHighcharts from 'react-highcharts';
import highchartsMore from 'highcharts-more';
import highchartsExporting from 'highcharts-exporting';
import configHighCharts from './highcharts.config';

highchartsMore(ReactHighcharts.Highcharts);
highchartsExporting(ReactHighcharts.Highcharts);

class HighCharts extends React.Component {
  render() {
    return (
      <ReactHighcharts config={ configHighCharts } />
    );
  }
}

export default HighCharts;