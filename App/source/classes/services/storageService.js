/**
 * Created by silvan on 10/28/15.
 */
define(['app/model/event'], function(Event) {
    'use strict';

    var StorageService = function() {
        this.events = new (function() {
            var eventList = [];
            /**
             * Find event by identifier
             *
             * @param string identifier
             * @return Event or null
             */
            this.get = function(identifier) {
                var returnValue = null;
                eventList.forEach(function(event) {
                    if(event.id === identifier) {
                        returnValue = event;
                    }
                });
                return returnValue;
            };
            /**
             * Get all events
             *
             * @return Event[]
             */
            this.all = function() {
                return eventList;
            };
            /**
             * Add event if not already in list
             * @param Event event
             * @return boolean if added successfull
             */
            this.add = function(event) {
                var added = true;
                eventList.forEach(function(currentEvent) {
                    if(currentEvent.id === event.id) {
                        added = false;
                    }
                });
                if(added) {
                    eventList.push(event);
                }
                return added;
            };
        })();
    }

    return StorageService;
});