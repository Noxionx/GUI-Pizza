define(["angular", "angular-material", "angular-route", "./controllers"],function(){
    angular.module("controllers").controller("favCtrl",["$scope", function($scope){
    	$scope.pizzas = [
    		{"name":"Royale","ingredients":["tomate","champignon","lardon","mozzarella"], "price": 8.99},

    		{"name":"Savoyarde","ingredients":["tomate","champignon","lardon","mozzarella"], "price": 11.99},

    		{"name":"4 formage","ingredients":["tomate","champignon","lardon","mozzarella"], "price": 10.49}
    		];
    	$scope.types = [
	      {name:'épaisse'},
	      {name:'fine'},
	      {name:'normale'}
   		 ];
   		$scope.nbpersonnes = [
	      {nb:'1'},
	      {nb:'2'},
	      {nb:'3'},
	      {nb:'4'},
	      {nb:'5'}
   		 ];

   		$scope.nbPers = $scope.nbpersonnes[1];
   		$scope.typePate = $scope.types[1];
   		$scope.addAllToCart = function(){
   			for(var pizza in $scope.pizzas){
   				$scope.addToCart($scope.pizzas[pizza]);
   			}
   		}
    }]);
});

