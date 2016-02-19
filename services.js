
stockApp.factory('stockService', function ($http) { 
var stockService = { 
   getStockData: function(series) { 
        
       var promise = $http.get('https://www.quandl.com/api/v3/datasets/WIKI/' + series + '.json?api_key=5YBV3ok58nZq7-xtDQJT').success(function (data) { 
                return data; 
            });
       return promise; 
   }
}
return stockService; 
}); 

/*
this.getStockData = function () {
    var highChartsAPI = $resource('https://www.quandl.com/api/v3/datasets/WIKI/FB.json?'); 
    return highChartsAPI.get({api_key: '5YBV3ok58nZq7-xtDQJT'});
}
}]); 
                     
var myService = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('test.json').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    }
  };
  return myService;
});
*/