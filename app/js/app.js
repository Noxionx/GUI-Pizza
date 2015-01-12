define(["angular",
    "angular-route",
    "angular-material",
    "localization",
    "controllers/headerCtrl",
    "controllers/sidenavCtrl",
    "controllers/homeCtrl",
    
    "controllers/contactCtrl",
    "controllers/favCtrl",
    "controllers/pizzaCtrl",
    "controllers/cartCtrl"
],function(){
    
    'use strict';
    angular.module('ngNoxCV', [
      'ngRoute',
      "ngMaterial",
      "common.localization",
      "controllers"
    ]).controller("appCtrl",["$scope", "$location", "$mdDialog",function($scope, $location, $mdDialog){
                    $scope.theme = "red";
                    $scope.logged = false;
                    $scope.cart =  {
                      "items":{},
                      "total": 0
                    };
                    $scope.toggleLogged = function(){
                      if($scope.logged){
                        $scope.logged = false;
                      }
                      else $scope.logged = true;
                    }
                    $scope.login = function(){
                      $scope.logged = true;
                      console.log("login");
                    }
                    $scope.logout = function(){
                      $scope.logged = false;
                    }
                    $scope.showLogView = function(ev) {
                      var diagPromise = $mdDialog.show({
                        controller: loginCtrl,
                        templateUrl: 'partials/login.html',
                        targetEvent: ev
                      });
                      diagPromise.then(function(){$scope.login()})
                    };
                    $scope.addToCart = function (pizza){
                      if(!!$scope.cart.items[pizza.name] && $scope.cart.items[pizza.name]!=null){
                        $scope.cart.items[pizza.name].quantity++;
                      }
                      else{
                        $scope.cart.items[pizza.name] = {
                          "name":pizza.name,
                          "quantity":1,
                          "price": pizza.price,
                          "ingredients": pizza.ingredients
                        }
                      }
                      $scope.cart.total = 0;
                      for(var item in $scope.cart.items){
                        $scope.cart.total += $scope.cart.items[item].price * $scope.cart.items[item].quantity ;
                          
                      }
                      $scope.cart.total = $scope.cart.total.toFixed(2);
                    }
                    $scope.removeFromCart = function(pizza){
                      var tmpItems = $scope.cart.items;
                      var newItems = {};
                      for(var key in tmpItems){
                        if(!key.match(pizza.name))
                        {
                          newItems[key] = tmpItems[key];
                        }
                        else{
                          $scope.cart.total -= tmpItems[key].price * tmpItems[key].quantity;
                          $scope.cart.total = $scope.cart.total.toFixed(2);
                        }
                      }
                      $scope.cart.items = newItems;
                    }

                    
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
                    .when('/cart', {
      templateUrl: 'partials/cart.html',
      controller : 'cartCtrl'
    })

    }]);
        function loginCtrl($scope, $mdDialog) {
            $scope.hide = function() {
              $mdDialog.hide();
            };
        }
});


