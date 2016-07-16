angular.module('app')
  .controller('mainCtrl', function($scope, myService) {

$scope.displayData = myService.displayData();


  }); //end service
