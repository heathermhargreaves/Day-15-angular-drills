angular.module('myApp')
  .controller('mainCtrl', ['$scope', '$stateParams', 'mainService', function($scope, $stateParams, mainService) {

    $scope.test = 'working';
    $scope.getNasaPic = function() {
      mainService.getNasaPic().then(function(response) {
        console.log(response);
        $scope.spacePic = response.data.url;
        $scope.picTitle = response.data.title;
        $scope.picDescription = response.data.explanation;
        return response;
      });
    };

  }]); //end controller
