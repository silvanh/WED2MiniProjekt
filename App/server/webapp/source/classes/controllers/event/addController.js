define(['app/model/event'], function(Event) {
  'use strict';

  var EventAddController = function($scope, $routeParams, EventRepository,event) {
    this.scope = $scope;

    $scope.clearStartDate = function () {
      $scope.startDate = null;
    };

    $scope.clearEndDate = function () {
      $scope.endDate = null;
    };

    $scope.openStartDate = function($event) {
      $scope.status.startDateOpened = true;
    };

    $scope.openEndDate = function($event) {
      $scope.status.endDateOpened = true;
    };

    $scope.setStartDate = function(year, month, day) {
      $scope.startDate = new Date(year, month, day);
    };

    $scope.setEndDate = function(year, month, day) {
      $scope.endDate = new Date(year, month, day);
    };

    $scope.format = 'dd-MM-yy';
    $scope.status = {
      startDateOpened: false,
      endDateOpened: false
    };

    this.scope.add =  function(){
      var newEvent = new Event();
    }
  }

  return EventAddController;
});
