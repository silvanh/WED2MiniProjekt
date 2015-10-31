/**
 * Created by silvan on 10/21/15.
 */

define(['app/services/storageService'], function(StorageService){
    'use strict'
    var EventListController = function($scope, StorageService){
		var storageService = new StorageService();
        this.scope=$scope;
        this.scope.events = storageService.events.all();
    }

    return EventListController;

});