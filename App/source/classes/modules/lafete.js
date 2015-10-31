/**
 * Created by silvan on 10/21/15.
 */
// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'app/controllers/eventListController', 'app/services/storageService'], function (Angular, EventListController,StorageService) {
    'use strict'

    // Create new empty app/module named 'lafete'
    var Lafete = Angular.module('lafete', ['ngRoute']);

    // Services Definieren
    Lafete.service('StorageService', StorageService);

    // Controller injection definition
    Lafete.controller('EventListController',EventListController);
    EventListController.$inject = ['$scope','StorageService'];


    // export module to use it in other classes
    return Lafete;
});