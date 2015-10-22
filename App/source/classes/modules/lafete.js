/**
 * Created by silvan on 10/21/15.
 */
// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'app/controllers/eventListController'], function (Angular, EventListController) {
    'use strict'

    // Create new empty app/module named 'lafete'
    var Lafete = Angular.module('lafete', []);

    // Controller injection definition
    Lafete.controller('EventListController',EventListController);
    EventListController.$inject = ['$scope'];


    // export module to use it in other classes
    return Lafete;
});