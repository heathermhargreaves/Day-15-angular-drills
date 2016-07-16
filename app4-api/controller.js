angular.module('beerMe')
  .controller('beerController', function($scope, beerService) {

    $scope.getRandomBeer = function() {
      beerService.getBeer().then(function(response) {
        console.log(response)
        $scope.abv = response.data.data.abv + " ABV";
        $scope.name = response.data.data.name;

        $scope.catchphrase = response.data.data.available.description;

        $scope.description = response.data.data.description;
        $scope.organic = response.data.data.isOrganic;
        $scope.styleName = response.data.data.style.category.name;


        $scope.categoryDescription = response.data.data.style.description;
        $scope.label = response.data.data.labels.small;

        $scope.foodPairings = "Drink with " + response.data.data.available.foodPairings;
        $scope.glassware = "Drink out of a " + response.data.data.glass.name + " glass";
      })

      //$scope.getRandomBeer();
    };


  }); //end controller
