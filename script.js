Highcharts.chart('container', {
  chart: { type: 'spline' },
  title: { text: 'Yearly Data from Google Sheet' },
  xAxis: {
    type: 'category',
    title: { text: 'Year' }
  },
  yAxis: { title: { text: 'Value' } },
  data: {
    csvURL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTvYM34lhVQ3yIf48EGBCXXXcNIz530XqCrxvWVtOi8QZSTAprzxjbH9fyvSFQy3gFAhG-EoRb3gGam/pub?output=csv',
    enablePolling: true,
    dataRefreshRate: 5
  }
});
