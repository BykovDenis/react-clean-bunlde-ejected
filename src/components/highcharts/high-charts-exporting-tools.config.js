function highchartsExportingToolsConfig(y = 15) {
  return {
    buttons: {
      contextButton: {
        align: 'right',
        x: 0,
        y: y,
        symbolSize: 14,
        symbolY: 14,
        height: 14,
        text: 'Export',
        theme: {
          'stroke-width': 1,
          stroke: 'silver',
          r: 3,
          height: 14,
          states: {
            hover: {
              fill: '#f0ad4e'
            },
            select: {
              stroke: '#039',
              fill: '#a4edba'
            }
          }
        },
        menuItems: [{
          text: 'Print chart',
          onclick: function onclick() {
            this.print();
          }
        }, {
          text: 'Download PNG image',
          onclick: function onclick() {
            this.exportChart({
              type: 'image/png',
              filename: 'Weather forecast hourly graphic'
            });
          }
        }, {
          text: 'Download JPEG image',
          onclick: function onclick() {
            this.exportChart({
              type: 'image/jpeg',
              filename: 'Weather forecast hourly graphic'
            });
          }
        }, {
          text: 'Download PDF document',
          onclick: function onclick() {
            this.exportChart({
              type: 'application/pdf',
              filename: 'Weather forecast hourly graphic'
            });
          }
        }, {
          text: 'Download SVG vector image',
          onclick: function onclick() {
            this.exportChart({
              type: 'image/svg+xml',
              filename: 'Weather forecast hourly graphic'
            });
          }
        }]
      }
    }
  };
}

export default highchartsExportingToolsConfig;
