define(["angular", "angular-material", "angular-route", "./controllers"],function(){
    angular.module("controllers").controller("pizzaCtrl",["$scope", function($scope){
    	$scope.pizzas = [
    		{"name":"Royale","ingredients":["tomate","champignon","lardon","mozzarella"]},

    		{"name":"Savoyarde","ingredients":["tomate","champignon","lardon","mozzarella"]},

    		{"name":"4 formage","ingredients":["tomate","champignon","lardon","mozzarella"]},

        {"name":"Bolognaise","ingredients":["tomate","champignon","lardon","mozzarella"]},

        {"name":"Marocco","ingredients":["tomate","champignon","lardon","mozzarella"]}
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
    	
    }]);
});
