'use strict';

angular.module('anApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.sortType = "forks_count";
    $scope.sortReverse = "false";
    $scope.searchForks = '';

    $http.get('https://api.github.com/search/repositories?q=user:X-Formation+fork:true').then(function(response){
    	$scope.repos = response.data.items;
    	console.log($scope.repos);
    });
    
  });
