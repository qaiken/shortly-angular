angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {}; // maybe?
  $scope.addLink = function() {
    return Links.addLink($scope.link);
  };

  $scope.submitLink = function() {
    $scope.addLink().then(function() {
      $location.path('/links');
    })
  };

});
