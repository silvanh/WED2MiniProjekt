define([], function() {
  'use strict';


  var NotificationService = function(toaster) {
    var timeout = 4000;

    this.info = function (message, title) {
      if (!title) {
        title = 'Success';
      }
      toaster.pop('success', title, message, timeout);
    };

    this.error = function (message, title) {
      if (!title) {
        title = 'Error';
      }
      toaster.pop('error', title, message, timeout);
    };

    this.warning = function (message, title) {
      if (!title) {
        title = 'Warning';
      }
      toaster.pop('warning', title, message, timeout);
    };
  }
  return NotificationService;
});