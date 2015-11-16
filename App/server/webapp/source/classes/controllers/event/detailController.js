define([], function() {
	'use strict';

	var EventDetailController = function($scope, $routeParams, EventRepository) {
		this.scope = $scope;
    EventRepository.get($routeParams.eventId,
      function(event) {
        this.scope.event = event;
        console.log(event.guests[0].name);
      }.bind(this),
      function() {}
    );
	}

	return EventDetailController;
});