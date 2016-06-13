var app = angular.module("storeplus", []);

app.controller("storeCtrl", function($scope, $http) {
  $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
  $scope.products = null;

  $scope.message="Hello Arasu";
  $http.get('data/products.json').
    success(function(data, status, headers, config) {
      $scope.product = data;
    });
});