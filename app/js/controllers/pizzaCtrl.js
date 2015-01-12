define(["angular", "angular-material", "angular-route", "./controllers"],function(){
    angular.module("controllers").controller("pizzaCtrl",["$scope", function($scope){
    	$scope.pizzas = [
    		{"name":"Royale","ingredients":["tomate","champignon","lardon","mozzarella"], "price": 8.99},

    		{"name":"Savoyarde","ingredients":["tomate","champignon","lardon","mozzarella"], "price": 11.99},

    		{"name":"4 formage","ingredients":["tomate","champignon","lardon","mozzarella"], "price": 9.49},
    		
    		{"name":"Bolognaise","ingredients":["tomate","champignon","lardon","mozzarella"], "price": 8.99},

        {"name":"Reine","ingredients":["tomate","champignon","lardon","mozzarella"], "price": 10.49},

        {"name":"Orientale","ingredients":["tomate","champignon","lardon","mozzarella"], "price": 12.99},

        {"name":"Forestière","ingredients":["tomate","champignon","lardon","mozzarella"], "price": 11.80},

        {"name":"Indienne","ingredients":["tomate","champignon","lardon","mozzarella"], "price": 7.50}
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
