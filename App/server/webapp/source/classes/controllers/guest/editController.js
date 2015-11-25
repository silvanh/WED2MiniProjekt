define(['app/model/guest'], function(Guest) {
  'use strict';

  var GuestEditController = function($scope, $routeParams, GuestRepository, $location) {
    this.scope = $scope;
    GuestRepository.get($routeParams.eventId, 
      $routeParams.guestId,
      function(guest) {
        this.scope.guest = guest;
      }.bind(this),
      function() {}
    );

    this.scope.back = function() {
      $location.path('/events/' + $routeParams.eventId);
    }

    this.scope.editGuest =  function(){
      if( $scope.guest.name && $scope.guest.contribution && $scope.guest.comment) {
      	$scope.editGuestError = '';
      	GuestRepository.update(
      		$routeParams.eventId,
      		$routeParams.guestId,
        	$scope.guest,
        	function(guest) {
        	  $location.path('/events/' + $routeParams.eventId);
        	},
        	function() {}
      	);
      } else {
      	$scope.editGuestError = "Please fill out all fields";
      }
      
    }
  }
  return GuestEditController;
});
