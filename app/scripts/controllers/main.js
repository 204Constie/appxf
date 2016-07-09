'use strict';

angular.module('anApp')
  .controller('MainCtrl', function ($scope, $http) {
    // var vm = this; - if not scope
    // $scope.repos = [];
    $http.get('https://api.github.com/search/repositories?q=user:X-Formation+fork:true').then(function(response){
    	$scope.repos = response.data.items;
    	console.log($scope.repos);
    });
    
  });
