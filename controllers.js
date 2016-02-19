stockApp.controller('MainCtrl', ['$scope', 'stockService', function ($scope, stockService) {
    $scope.data = ""; //init global variables
    $scope.stocks = [];
  

    $scope.addStocks = function () { //push symbols into array on submit
        $scope.stocks.push($scope.stock);

        //forEach symbol in array
        //make http request

        stockService.getStockData($scope.stock).success(function (d) {
            $scope.stockObjects.push({
                name: $scope.stock,
                data: d.dataset.data,
                tooltip: {
                    valueDecimals: 2
                }
            });
        });
    }
    stockService.getStockData('FB').success(function (d) {
        $scope.data = d; //assign promise to scope
    });
    $scope.$watch('data', function () { //get updated var with json data

        if ($scope.data !== "") {

            chart = new Highcharts.StockChart({ //now load the chart with the data

                chart: {
                    renderTo: 'container',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                xAxis: {
                    type: 'datetime',
                        },

                navigator: {
                        enabled: true
                            },

                plotOptions: {
                    series: {
                        turboThreshold: 10000,
                        //pointStart: Date.UTC(1980, 0, 1),
                        pointInterval: 24 * 3600 * 1000 // one day
                    }
                },
                title: {
                    text: 'FB Stock Price'
                },

                rangeSelector: {
                    allEnabled: true,
                    selected: 2
                },

                series: [
                    {
                    name: 'FB',
                    data: $scope.data.dataset.data,
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            });
            console.log(chart);
            $scope.addStocks = function () { //push symbols into array on submit
            $scope.stocks.push($scope.stock);
        //forEach symbol in array
        //make http request
            stockService.getStockData($scope.stock).success(function (d) {
            chart.addSeries({
                name: $scope.stock,
                data: d.dataset.data,
                tooltip: {
                    valueDecimals: 2
                }
            });
            chart.redraw();
            $scope.stock = "";
        });
      }
    }
 });
}]);

/*
$scope.removeStocks = function () {
                //angular.element('#container').highcharts();
                console.log(chart);
                console.log($scope.stockObjects);
                console.log($scope.stockObjects[0].name);
                console.log($scope.stockObjects[0].data);
                console.log($scope.data.dataset.data);
                var newSeries = {
                        name: $scope.stockObjects[0].name,
                        data: $scope.stockObjects[0].data,
                        tooltip: {
                            valueDecimals: 2
                                }
                    };

                    console.log(chart);
                    chart.addSeries(newSeries);
                //$scope.stocks.splice(index, 1);
        }

{name: $scope.stockObjects[0].name,
                                 data: $scope.stockObjects[0].data,
                                 tooltip: {
                                        valueDecimals: 2
                                        }
                                };


    $scope.removeStocks = function () {
           var addChart = angular.element('#container').highcharts();
        //angular.element('#container').highcharts();
            addChart.addSeries({
                             name: 'FB',
                             data: $scope.data.dataset.data,
                             tooltip: {
                                 valueDecimals: 2
                             }
                });

           console.log($scope.stockObjects);
      //$scope.stocks.splice(index, 1);
    };


  }]);
*/
