'use strict';

var app = angular.module('MyApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    var refresh = function() {
        $http.get('/contactlist').success(function(docs) {
            console.log(docs);
            $scope.contactList = docs;
        }).error(function(err) {
            console.log(err);
        });
    }
    refresh();

    $scope.addContact = function() {
        $http.post('/contactlist', $scope.contact).success(function(res) {
            console.log(res);
            refresh();
        });
    };

    $scope.remove = function(id){
    	console.log(id);
    	$http.delete("/contactlist/"+id).success(function(response){
    		console.log(response);
    		refresh();
    	});
    };

}]);
