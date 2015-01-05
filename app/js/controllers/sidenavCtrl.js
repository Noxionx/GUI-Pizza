define(["angular", "angular-material", "angular-route", "./controllers"],function(){
    angular.module("controllers").controller("sidenavCtrl",["$scope", "$location", function($scope, $location){
            $scope.goHome = function(){
                $location.path("/");
            };
    }]);
});
