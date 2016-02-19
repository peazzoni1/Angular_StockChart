 stockApp.directive('stockChart', ['stockService', function (stockService, $compile) {

     return {
         restrict: 'C',

         controller: 'MainCtrl',
         scope: true,
         templateURL: 'Pages/homepage.html',
         link: function (scope, elements, attrs, controller) {
           /*
             stockService.getStockData().$promise.then(function (data) {
             
                 var chart = new Highcharts.StockChart({
                     chart: {
                         renderTo: 'container',
                         plotBackgroundColor: null,
                         plotBorderWidth: null,
                         plotShadow: false
                     },
                     xAxis: {
                         type: 'datetime'
                     },
                     plotOptions: {
                         series: {
                             pointStart: Date.UTC(2010, 0, 1),
                             pointInterval: 24 * 3600 * 1000 // one day
                         }
                     },
                     title: {
                         text: 'FB Stock Price'
                     },
                     rangeSelector: {
                         allButtonsEnabled: true,
                         selected: 2
                     },
                     series: [{
                             name: 'FB',
                             data: data.dataset.data,
                             tooltip: {
                                 valueDecimals: 2
                             }
                }]
                 });
             });
             */
         }
     }
 }]);

 /*
scope.$watch("stockData", function (newValue) {
        chart.series[0].setData(newValue, true);
      }, true);
     */