angular.module('app', [])
  .directive('highlight', function() {
      return {
        restrict: 'A',
        link: function(scope, element) {
          element.on('click', function() {
            element[0].select();
          });
        }
      };



  }); //end directive
