import highchartsExportingToolsConfig from './high-charts-exporting-tools.config';

const configHighCharts = {
  chart: {
    renderTo: 'chart-seasons',
    type: 'spline'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [
    { type: 'column', data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4] },
    { type: 'spline', data: [500, 463, 138, 209, 5, 52, 356, 295, 291, 71, 333, 499] },
    { type: 'spline', data: [4, 27, 191, 228, 256, 95, 335, 225, 402, 317, 48, 0] },
    { type: 'spline', data: [372, 427, 60, 299, 487, 66, 181, 201, 455, 73, 117, 229] },
    /* { type: 'spline', data: [170, 328, 155, 492, 457, 342, 424, 141, 247, 194, 477, 428] },
    { type: 'spline', data: [476, 151, 172, 346, 116, 103, 312, 323, 182, 488, 226, 136] },
    { type: 'spline', data: [272, 164, 36, 483, 212, 40, 117, 315, 221, 287, 52, 301] },
    { type: 'spline', data: [208, 488, 110, 157, 131, 297, 4, 4, 240, 219, 149, 288] },
    { type: 'spline', data: [352, 26, 162, 293, 159, 91, 97, 111, 55, 434, 433, 193] },
    { type: 'spline', data: [480, 359, 280, 195, 426, 351, 280, 220, 459, 300, 319, 347] },
    { type: 'spline', data: [241, 467, 339, 18, 272, 71, 224, 372, 263, 493, 193, 369] },
    { type: 'spline', data: [216, 67, 132, 260, 306, 386, 373, 92, 120, 497, 369, 73] },
    { type: 'spline', data: [41, 69, 5, 65, 449, 154, 425, 93, 42, 66, 247, 270] } */
  ],
  exporting: highchartsExportingToolsConfig(5),
};

export default configHighCharts;