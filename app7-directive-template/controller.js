angular.module('app')
  .controller('controller', function($scope, service) {

    $scope.places = service.places;
    //console.log($scope.places);

  }); //end controller
