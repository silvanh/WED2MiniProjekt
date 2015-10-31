/**
 * Created by silvan on 10/21/15.
 */

define(['app/model/event'],function(Event){
    'use strict'
    var EventListController = function($scope, storageService){
        this.scope=$scope;
        this.scope.events = storageService.events;
    }

    return EventListController;

});