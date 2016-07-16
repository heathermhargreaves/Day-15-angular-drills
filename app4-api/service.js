angular.module('beerMe')
  .service('beerService', function($http) {

    this.getBeer = function() {
      return $http({
        method: 'GET',
        url: 'http://api.brewerydb.com/v2/beer/random?key=9b47547657c6931c8848c320a0cd5200&format=json'
      }).then(function(response) {
        console.log(response);
        return response;
      });
    };


  }); //end service
