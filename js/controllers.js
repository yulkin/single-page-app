//'use strict'
angular.module("singlePageApp", [])

.controller("SinglePageCtrl", function ($scope, $http){
	$http.get("js/people.json").success(function(data, status, headers, config){
		$scope.people = data;
	});	
	
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