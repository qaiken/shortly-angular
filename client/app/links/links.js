angular.module('shortly.links', [])
.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = Links.getLinks;

  $scope.getLinks().then(function(links) {
    // console.log(res);
    $scope.data.links = links;
  });

  // $scope.getLinks(); // maybe?
});
