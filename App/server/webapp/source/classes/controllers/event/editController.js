define(['app/model/event'], function(Event) {
  'use strict';

  var EventEditController = function($scope, $routeParams, EventRepository, $location, NotificationService) {
    this.scope = $scope;

    this.scope.action="Edit Event"

    EventRepository.get($routeParams.eventId,
      function (event) {
        this.scope.event = event;
        this.scope.setFields();
      }.bind(this),
      function () {
      }
    );

    this.scope.setFields = function(){
      this.scope.eventName = this.scope.event.name;
      this.scope.startDate = new Date(this.scope.event.times.begin);
      this.scope.endDate = new Date(this.scope.event.times.end);
      this.scope.startTime = new Date(this.scope.event.times.begin);
      this.scope.endTime= new Date(this.scope.event.times.end);
      this.scope.description = this.scope.event.description;
      this.scope.targetGroup =this.scope.event.targetGroup;
      this.scope.contributionDescription = this.scope.event.contributionsDescription;
      this.scope.location= this.scope.event.location;
    }.bind(this)

    this.scope.back = function () {
      $location.path('/');
    }.bind(this)

    this.scope.clearStartDate = function () {
      this.scope.startDate = null;
    }.bind(this)

    this.scope.clearEndDate = function () {
      this.scope.endDate = null;
    }.bind(this)

    this.scope.openStartDate = function ($event) {
      this.scope.status.startDateOpened = true;
    }.bind(this)

    this.scope.openEndDate = function ($event) {
      this.scope.status.endDateOpened = true;
    }.bind(this)

    this.scope.setStartDate = function (year, month, day) {
      this.scope.startDate = new Date(year, month, day);
    }.bind(this)

    this.scope.setEndDate = function (year, month, day) {
      this.scope.endDate = new Date(year, month, day);
    }.bind(this)

    this.scope.format = 'dd-MM-yy';
    this.scope.status = {
      startDateOpened: false,
      endDateOpened: false
    };

    EventRepository.all(function (events) {
        this.scope.events = events;
      }.bind(this),
      function () {
      });

    this.scope.doAction = function () {
      if(!(this.scope.startDate&&this.scope.endDate&&this.scope.startTime&&this.scope.endTime&&this.scope.eventName&&this.scope.description&&this.scope.targetGroup&&this.scope.contributionDescription&&this.scope.location&&this.scope.location.name&&this.scope.location.street&&this.scope.location.plz&&this.scope.location.city)){
        NotificationService.error("please fill in all fields");
      }else{
        var begin = new Date(
          this.scope.startDate.getFullYear(),
          this.scope.startDate.getMonth(),
          this.scope.startDate.getDate(),
          this.scope.startTime.getHours(),
          this.scope.startDate.getMinutes()
        );
        var end = new Date(
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
        var newEvent = new Event(this.scope.eventName, this.scope.description, this.scope.targetGroup, this.scope.contributionDescription, this.scope.location, time);
        EventRepository.edit(
          $routeParams.eventId,
          newEvent,
          function (event) {
            $location.path('/events/' + event.id);
            NotificationService.info(event.name + " edited");
          },
          function () {
          }
        );
      }
    }.bind(this)
  }
  return EventEditController;
});
