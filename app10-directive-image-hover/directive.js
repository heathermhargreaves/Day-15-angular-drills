angular.module('app')
  .directive('specialPic', function(){
      return {
        restrict: 'E',
        scope: {
          src: '@imgSrc'
        },
        replace: false,
        template: '<img src={{src}}>',
        link: function(scope, element, attrs) {
              element.on('mouseenter', function() {
                  element.css('opacity', '.5');
              })
              .on('mouseleave', function() {
                element.css('opacity', '1');
              });

        }


      };


  }); // end directive
