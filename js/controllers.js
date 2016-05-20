//'use strict'
angular.module("singlePageApp", [])

.controller("SinglePageCtrl", function ($scope){
	$scope.people = [
	{
		firstName : "Mark",
		lastName : "Koval",
		phone : "380507777777",
		gender : "male",
		age : "30"
	},
	{
		firstName : "Ann",
		lastName : "Petrova",
		phone : "380507778877",
		gender : "female",
		age : "27"
	},
	{
		firstName : "Alex",
		lastName : "Mash",
		phone : "380507777557",
		gender : "male",
		age : "37"
	}
	];	
	
	$scope.sortField = undefined;
	$scope.reverse = false;
	
	$scope.sort = function (fieldName) {
		if ($scope.sortField === fieldName) {
			$scope.reverse = !$scope.reverse;
		} else {
			$scope.sortField = fieldName;
			$scope.reverse = false;
		}
	};

	$scope.addNewHuman = function (human, isvalid) {
		if (isvalid) {
				$scope.people.push({
					firstName : human.firstName,
					lastName : human.lastName,
					phone : human.phone,
					gender : human.gender,
					age : human.age
				});
			} else {
				$scope.message = "Error";
				$scope.showError = true;
			}
	}
	
	$scope.getError = function (error) {
		if (angular.isDefined(error)) {
			if (error.required) {
				return "Please provide missing information";
			} else if (error.pattern) {
				return "Please provide correct phone";
			}
		}
	}
	
	$scope.delete = function(user) { 
    	var index = $scope.people.indexOf(user); 
    $scope.people.splice(index, 1); 
};
});