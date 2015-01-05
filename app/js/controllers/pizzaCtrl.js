define(["angular", "angular-material", "angular-route", "./controllers"],function(){
    angular.module("controllers").controller("pizzaCtrl",["$scope", function($scope){
    	$scope.pizzas = [
    		{"name":"royale","ingredients":["tomate","champignon","lardon","mozzarella"]},

    		{"name":"savoyarde","ingredients":["tomate","champignon","lardon","mozzarella"]},

    		{"name":"4 formage","ingredients":["tomate","champignon","lardon","mozzarella"]}
    	];
    }]);
});
