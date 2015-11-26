define(['app/model/guest'], function(Guest) {
  'use strict';

  var GuestAddController = function($scope, $routeParams, GuestRepository, $location) {
    this.scope = $scope;
    this.scope.eventId = $routeParams.eventId;

    this.scope.back = function() {
      $location.path('/events/' + $routeParams.eventId);
    }

    this.scope.action="Add Guest"
    this.scope.titel="Add Lunch-Guest"

    //TODO Check if reached MaxAmountOfGuests
    this.scope.doAction =  function(){
      if( this.scope.guestName && this.scope.guestContribution && this.scope.guestComment) {
        this.scope.addGuestError = '';
      	var newGuest = new Guest(this.scope.guestName, this.scope.guestContribution, this.scope.guestComment, false);
      	GuestRepository.add(
      		$routeParams.eventId,
        	newGuest,
        	function(guest) {
        	  $location.path('/events/' + $routeParams.eventId);
        	},
        	function() {}
      	);
      } else {
        this.scope.addGuestError = "Please fill out all fields";
      }
      
    }.bind(this)
  }
  return GuestAddController;
});
