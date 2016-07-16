angular.module('arrayApp')
  .controller('arrayController', function($scope, arrayService) {


  //$scope.displayData = arrayService.displayData;

  //$scope.displayData();

  $scope.displayData = arrayService.displayData();


});
