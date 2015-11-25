define(['app/model/guest'], function(Guest) {
    'use strict';

    var GuestRepository = function($http) {
        this.urls = {
            all: '/api/events/:eventId/guests',
            get: '/api/events/:eventId/guests/:guestId',
            add: '/api/events/:eventId/guests',
            update: '/api/events/:eventId/guests/:guestId'
        }

        this.guests = [];

        /**
         * Get all guests of event
         *
         * @param string event identifier
         * @return Guests[]
         */
        this.all = function(eventId, successCallback) {
            $http.get(this.urls.all.replace(':eventId', eventId))
                .success(function(data) {
                    // map applys a function on every element in the array and returns the result as new array
                    var guests = data.guests.map(function(guestDTO) {
                        return Guest.createFromDTO(guestDTO);
                    });
                    successCallback(guests);
                });
        };
      /**
       * Find guest by identifier
       *
       * @param string event identifier
       * @param string guest identifier
       */
      this.get = function(eventId, guestId, successCallback, errorCallback) {
        $http.get(this.urls.get.replace(':eventId', eventId).replace(':guestId', guestId))
          .success(function(guestDTO) {
            successCallback(Guest.createFromDTO(guestDTO));
          })
          .error(errorCallback);
      };

      /**
       * Add guest to event
       * #param string event identifier
       * @param Guest guest
       */
      this.add = function(eventId, guest, successCallback, errorCallback) {
        $http.post(this.urls.add.replace(':eventId', eventId), guest)
          .success(function(guestDTO) {
            successCallback(Guest.createFromDTO(guestDTO));
          })
          .error(errorCallback);
      };

      /**
       * Update guest by identifier
       *
       * @param string event identifier
       * @param string guest identifier
       * @param Guest guest
       */
      this.get = function(eventId, guestId, guestsuccessCallback, errorCallback) {
        $http.post(this.urls.update.replace(':eventId', eventId).replace(':guestId', guestId), guest)
          .success(function(guestDTO) {
            successCallback(Guest.createFromDTO(guestDTO));
          })
          .error(errorCallback);
      };
    };

    return GuestRepository;
});