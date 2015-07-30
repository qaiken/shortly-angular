angular.module('shortly.navigation', [])

.controller('NavController', function ($scope, Auth) {
  $scope.signOut = Auth.signout;
  $scope.isAuth = Auth.isAuth;
});