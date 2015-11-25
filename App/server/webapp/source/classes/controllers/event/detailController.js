define([], function() {
	'use strict';

	var EventDetailController = function($scope, $routeParams, EventRepository) {
		this.scope = $scope;
    EventRepository.get($routeParams.eventId,
      function(event) {
        this.scope.event = event;
        this.scope.amountOfGuests = event.guests.length;
      }.bind(this),
      function() {}
    );
    
	}

	return EventDetailController;
});