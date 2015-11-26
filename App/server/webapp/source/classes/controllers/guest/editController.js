define(['app/model/guest'], function(Guest) {
  'use strict';

  var GuestEditController = function($scope, $routeParams, GuestRepository, $location) {
    this.scope = $scope;
    GuestRepository.get($routeParams.eventId, 
      $routeParams.guestId,
      function(guest) {
        this.scope.guest = guest;
        this.scope.setFields();
      }.bind(this),
      function() {}
    );

    this.scope.back = function() {
      $location.path('/events/' + $routeParams.eventId);
    }

    this.scope.setFields=function(){
      this.scope.guestName=this.scope.guest.name;
      this.scope.guestContribution=this.scope.guest.contribution;
      this.scope.guestComment=this.scope.guest.comment;
    }.bind(this)

    this.scope.action="Edit Guest"
    this.scope.titel="Edit Lunch-Guest"

    this.scope.doAction =  function(){
      console.log("vorher");
      console.log(this.scope.guestName);
      console.log(this.scope.guestContribution);
      console.log(this.scope.guestComment);
      if(this.scope.guestName && this.scope.guestContribution && this.scope.guestComment) {
        console.log("abkabsdlkja");
        this.scope.guest = new Guest(this.scope.guestName, this.scope.guestContribution, this.scope.guestComment, false);
        this.scope.editGuestError = '';
      	GuestRepository.update(
      		$routeParams.eventId,
      		$routeParams.guestId,
          this.scope.guest,
        	function(guest) {
        	  $location.path('/events/' + $routeParams.eventId);
        	},
        	function() {}
      	);
      } else {
        this.scope.editGuestError = "Please fill out all fields";
      }
      
    }.bind(this)
  }
  return GuestEditController;
});
