'use strict';

var app = angular.module('MyApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    var refresh = function() {
        $http.get('/contactlist').success(function(docs) {
            $scope.contactList = docs;
        });
        $scope.contact = "";
    };

    refresh();

    $scope.addContact = function() {
        $http.post('/contactlist', $scope.contact).success(function(res) {
            refresh();
        });
    };

    $scope.edit = function(id) {
        $http.get("/contactlist/" + id).success(function(response) {
            $scope.contact = response;
        });
    };
    $scope.update = function(id) {
        $http.put("/contactlist/" + $scope.contact._id, $scope.contact).success(function(response) {
            refresh();
        });
    };

    $scope.remove = function(id) {
        console.log(id);
        $http.delete("/contactlist/" + id).success(function(response) {
            refresh();
        });
    };

}]);
