define(['app/model/guest'], function(Guest) {
  'use strict';

  var GuestAddController = function($scope, $routeParams, GuestRepository, $location, NotificationService) {
    this.scope = $scope;
    this.scope.eventId = $routeParams.eventId;

    this.scope.back = function() {
      $location.path('/events/' + $routeParams.eventId);
    }

    EventRepository.get($routeParams.eventId,
      function(event) {
        this.scope.event = event;
        this.scope.updateAmountOfGuests();
      }.bind(this),
      function() {}
    );

    this.scope.action="Add Guest"
    this.scope.titel="Add Lunch-Guest"

    //TODO Check if reached MaxAmountOfGuests
    this.scope.doAction =  function(){
      if(!this.scope.event){
        NotificationService.error("event not defined")
      }else if (event.guests.length>=event.maximalAmountOfGuests){
        NotificationService.error("maximal amount of guests reached")
      }else if( this.scope.guestName && this.scope.guestContribution && this.scope.guestComment) {
        this.scope.addGuestError = '';
      	var newGuest = new Guest(this.scope.guestName, this.scope.guestContribution, this.scope.guestComment, false);
      	GuestRepository.add(
      		$routeParams.eventId,
        	newGuest,
        	function(guest) {
            NotificationService.info(guest.name +" added");
        	  $location.path('/events/' + $routeParams.eventId);
        	},
        	function() {}
      	);
      } else {
        NotificationService.error("please fill in all fields");
      }
    }.bind(this)
  }
  return GuestAddController;
});
