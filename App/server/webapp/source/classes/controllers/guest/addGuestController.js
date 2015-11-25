define(['app/model/guest'], function(Guest) {
  'use strict';

  var GuestAddController = function($scope, $routeParams, GuestRepository, $location) {
    this.scope = $scope;

    this.scope.addGuest =  function(){
      if( $scope.guestName && $scope.guestContribution && $scope.guestComment) {
      	$scope.addGuestError = '';
      	var newGuest = new Guest($scope.guestName, $scope.guestContribution, $scope.guestComment, false);
      	GuestRepository.add(
      		$routeParams.eventId,
        	newGuest,
        	function(guest) {
        	  $location.path('/events/' + $routeParams.eventId);
        	},
        	function() {}
      	);
      } else {
      	$scope.addGuestError = "Please fill out all fields";
      }
      
    }
  }
  return GuestAddController;
});
