define(['app/model/event'], function(Event) {
  'use strict';

  var EventAddController = function($scope,$location, EventRepository) {
    this.scope = $scope;

    this.scope.action="Add Event"

    this.scope.back = function() {
      $location.path('/');
    }

    this.scope.clearStartDate = function () {
      this.scope.startDate = null;
    }.bind(this)

    this.scope.clearEndDate = function () {
      this.scope.endDate = null;
    }.bind(this)

    this.scope.openStartDate = function($event) {
      this.scope.status.startDateOpened = true;
    }.bind(this)

    this.scope.openEndDate = function($event) {
      this.scope.status.endDateOpened = true;
    }.bind(this)

    this.scope.setStartDate = function(year, month, day) {
      this.scope.startDate = new Date(year, month, day);
    }.bind(this)

    this.scope.setEndDate = function(year, month, day) {
      this.scope.endDate = new Date(year, month, day);
    }.bind(this)

    this.scope.format = 'dd-MM-yy';
    this.scope.status = {
      startDateOpened: false,
      endDateOpened: false
    };
    this.scope.maxGuests=10;

    EventRepository.all(function(events) {
      this.scope.events = events;
    }.bind(this),
    function() {});

    var refDate= new Date();
    refDate.setHours(12);
    refDate.setMinutes(0);
    this.scope.startTime = refDate;
    this.scope.endTime= refDate;

    this.scope.doAction =  function(){
      var begin = new Date(
        this.scope.startDate.getFullYear(),
        this.scope.startDate.getMonth(),
        this.scope.startDate.getDate(),
        this.scope.startTime.getHours(),
        this.scope.startDate.getMinutes()
      );
      var end =  new Date(
        this.scope.endDate.getFullYear(),
        this.scope.endDate.getMonth(),
        this.scope.endDate.getDate(),
        this.scope.endTime.getHours(),
        this.scope.endTime.getMinutes()
      );
      var time = {
        begin: begin,
        end: end
      }
      var newEvent = new Event(this.scope.eventName,this.scope.description,this.scope.targetGroup,this.scope.contributionDescription,this.scope.location,time,this.scope.maxGuests);
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
    }.bind(this)
  }
  return EventAddController;
});
