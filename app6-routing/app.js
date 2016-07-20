angular.module('myApp', ['ui.router']);

angular.module('myApp')
  .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home.html',
          controller: 'mainCtrl'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'signup.html',
          controller: 'mainCtrl'
        })
        .state('details', {
          url: '/details',
          templateUrl: 'details.html',
          controller: 'mainCtrl'
        });

      $urlRouterProvider
         .otherwise('/');

  }); //end of config
