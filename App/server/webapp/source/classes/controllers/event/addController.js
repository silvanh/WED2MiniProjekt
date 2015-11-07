define([], function() {
  'use strict';

  var EventAddController = function($scope, $routeParams, EventRepository) {
    this.scope = $scope;
    this.scope.test = "just a test site";
  }

  return EventAddController;
});
