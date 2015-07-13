'use strict';

var app = angular.module('MyApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('../contactlist').success(function(docs) {
        console.log(docs);
        $scope.contactList = docs;
    }).error(function(err){
    	console.log(err);
    });

    $scope.loadData = function() {
        console.log("hi");
    };

}]);
