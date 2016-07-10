'use strict';

angular.module('anApp')
  .controller('ContributorsCtrl', function ($scope) {
    $scope.sortType = 'contributions';
    $scope.sortReverse = 'false';


    $scope.contributors = [
	  {
	    "nickname": "John Doe",
	    "team": "Support",
	    "contributions": 6
	  },
	  {
	    "nickname": "Private Gomer Pyle",
	    "team": "Admins",
	    "contributions": 4
	  },
	  {
	    "nickname": "John Kowalski",
	    "team": "LAC",
	    "contributions": 10
	  },
	  {
	    "nickname": "Forrest Gump",
	    "team": "LAC",
	    "contributions": 10
	  },
	  {
	    "nickname": "David Bowman",
	    "team": "Licstat",
	    "contributions": 5
	  },
	  {
	    "nickname": "Neo",
	    "team": "LM-X",
	    "contributions": 1
	  },
	  {
	    "nickname": "Han Solo",
	    "team": "Internal Systems",
	    "contributions": 4
	  },
	  {
	    "nickname": "Indiana Jones",
	    "team": "LM-X",
	    "contributions": 3
	  },
	  {
	    "nickname": "Edward Scissorhands",
	    "team": "Admins",
	    "contributions": 3
	  },
	  {
	    "nickname": "Tyler Durden",
	    "team": "Licstat",
	    "contributions": 7
	  }
	]

  });
