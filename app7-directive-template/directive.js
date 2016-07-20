angular.module('app')
  .directive('placesListDir', function() {
      return {
        templateUrl: 'directive.html',
        restrict: 'E',
        //setting new isolating scope for the directive
        scope: {
          //within <places-list-dir> will look for 'test=', from there you can put variables from your scope such as $scope.places as 'places', ie: <places-list-dir test='places'><places-list-dir>. From there it will get directed to the templateUrl, and you must have 'myheader' in an ng class to pull up the $scope.places array.
          listout: '=list'
        }
        //controller only needed if we are manipulating data for the scope defined in the directive
        // controller: function($scope, service) {
        //   $scope.places = service.places;
        //   }
        }



  }); //end directive
