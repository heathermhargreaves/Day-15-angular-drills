angular.module('myApp')
  .service('mainService', function($http) {
console.log('hello');
    this.getNasaPic = function() {
      return $http({
        method: 'GET',
        url: 'https://api.nasa.gov/planetary/apod?api_key=xL8yMMKDg4MYj0m9GmPKc847Eac5QZbeI2CXCXgw'
      }).then(function(response) {
        console.log(response);
        return response;
      });
    };

  }); //end service
