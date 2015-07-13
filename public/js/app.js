'use strict';

var app = angular.module('MyApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope','$http', function($scope,$http){
	$http.get('/contactlist').success(function(response){
		console.log(response);
		$scope.contactList = response;
	});
}]);

