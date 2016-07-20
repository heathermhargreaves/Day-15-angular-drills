angular.module('app')
  .directive('login', function() {
    return {
        restrict: 'E',
        templateUrl: 'login.html',
        link: function(scope, element, attr){
            $('button').on('click', function(){
              alert("Congrats, you signed in!")
            });
        }
      };


  }); //end directive
