define(['app/model/event'], function(Event) {
  'use strict';

  var EventAddController = function($scope,$location, EventRepository) {
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
    $scope.maxGuests=10;

    EventRepository.all(function(events) {
      this.scope.events = events;
    }.bind(this));

    var refDate= new Date();
    refDate.setHours(12);
    refDate.setMinutes(0);
    $scope.startTime = refDate;
    $scope.endTime= refDate;

    this.scope.add =  function(){
      var begin = new Date(
        $scope.startDate.getFullYear(),
        $scope.startDate.getMonth(),
        $scope.startDate.getDate(),
        $scope.startTime.getHours(),
        $scope.startDate.getMinutes()
      );
      var end =  new Date(
        $scope.endDate.getFullYear(),
        $scope.endDate.getMonth(),
        $scope.endDate.getDate(),
        $scope.endTime.getHours(),
        $scope.endTime.getMinutes()
      );
      var time = {
        begin: begin,
        end: end
      }
      var newEvent = new Event($scope.eventName,$scope.description,$scope.targetGroup,$scope.contributionDescription,$scope.location,time,$scope.maxGuests);
      console.log(newEvent);
      console.log(newEvent.times.begin);
      console.log(newEvent.times.end);
      EventRepository.add(
        newEvent,
        function(event) {
          $location.path('/events/'+event.id);
        },
        function() {}
      );
    }
  }
  return EventAddController;
});
