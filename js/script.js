var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
update = function() {
	$http.get("https://api.github.com/users/" + $scope.search).then(function(response) {
    $scope.name = response.data.name;
    $scope.bio = response.data.bio;
    $scope.avatar_url = response.data.avatar_url;
	$scope.company = response.data.company;
	$scope.followers = response.data.followers;
	$scope.following = response.data.following;
	$scope.location = response.data.location;
	}
    );
    $http.get("https://api.github.com/users/" + $scope.search + "/repos").then(function(response) {
    $scope.repos = response.data;
  });
};
$scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }});