define([], function() {
	'use strict';

	var EventDetailController = function($scope, $routeParams, EventRepository, GuestRepository, $location) {
		this.scope = $scope;

    EventRepository.get($routeParams.eventId,
      function(event) {
        this.scope.event = event;

        this.scope.updateAmountOfGuests();
      }.bind(this),
      function() {}
    );

    this.scope.cancelRegistration = function(guest) {
      guest.canceled = true;
      GuestRepository.update(
        $routeParams.eventId,
        guest.id,
        guest,
        function(guest) {
          $location.path('/events/' + $routeParams.eventId);
          this.scope.updateAmountOfGuests();
        }.bind(this),
        function() {}
      );
    }.bind(this)
    
    this.scope.back = function() {
      $location.path('/');
    }

    this.scope.edit = function(){
      $location.path('/events/' + $routeParams.eventId+'/editEvent');
    }

    this.scope.updateAmountOfGuests = function(){
      var amountOfGuests = 0
      for(var guest in this.scope.event.guests) {
        if(!this.scope.event.guests[guest].canceled) ++amountOfGuests;
      }
      this.scope.amountOfGuests = amountOfGuests;
    }.bind(this)
	}

	return EventDetailController;
});