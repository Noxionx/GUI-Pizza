define(["angular",
    "angular-route",
    "angular-material",
    "localization",
    "controllers/headerCtrl",
    "controllers/sidenavCtrl",
    "controllers/homeCtrl",
    
    "controllers/contactCtrl",
    "controllers/favCtrl",
    "controllers/pizzaCtrl"
],function(){
    
    'use strict';
    angular.module('ngNoxCV', [
      'ngRoute',
      "ngMaterial",
      "common.localization",
      "controllers"
    ]).controller("appCtrl",["$scope", "$location", function($scope, $location){
                    $scope.theme = "red";
                    
    }]).config(['$routeProvider', function($routeProvider) {
            $routeProvider
                    .when('/', {
			templateUrl: 'partials/home.html',
			controller : 'homeCtrl'
		})
                    .when('/fav', {
			templateUrl: 'partials/favorites.html',
			controller : 'favCtrl'
		}) 
                    .when('/pizza', {
			templateUrl: 'partials/pizza.html',
			controller : 'pizzaCtrl'
		})
                    .when('/contact', {
			templateUrl: 'partials/contact.html',
			controller : 'contactCtrl'
		})

    }]);
});


