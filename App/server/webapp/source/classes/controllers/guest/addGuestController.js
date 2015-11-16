define(['app/model/guest'], function(Guest) {
  'use strict';

  var GuestAddController = function($scope,$routeParams) {
    this.scope=$scope;
    this.scope.test="test"
  }
  return GuestAddController;
});
