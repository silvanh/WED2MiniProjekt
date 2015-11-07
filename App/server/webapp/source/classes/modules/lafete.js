/**
 * Created by silvan on 10/21/15.
 */
// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'libraries/angularRoute', 'app/controllers/event/listController', 'app/controllers/event/detailController', 'app/controllers/event/addController', 'app/repository/eventRepository'],
    function (Angular, ngRoute, EventListController, EventDetailController, EventAddController, EventRepository) {
    'use strict'

    // modules
    var Lafete = Angular.module('lafete', ['ngRoute']);

    // services
    EventRepository.$inject = ['$http'];
    Lafete.service('EventRepository', EventRepository);

    // controllers
    EventListController.$inject = ['$scope','EventRepository'];
    Lafete.controller('EventListController', EventListController);
    
    EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository'];
    Lafete.controller('EventDetailController', EventDetailController);

    EventAddController.$inject = ['$scope', '$routeParams', 'EventRepository'];
    Lafete.controller('EventAddController', EventAddController);

    // routes
    Lafete.config(function($routeProvider) {
        $routeProvider.when('/events', {
            controller: 'EventListController',
            templateUrl: '/views/event/list.html'
        })
        .when('/events/:eventId', {
            controller: 'EventDetailController',
            templateUrl: '/views/event/detail.html'
        })
        .when('/add', {
           controller: 'EventAddController',
           templateUrl: '/views/event/add.html'
        })
        .otherwise({
            redirectTo: '/events'
        });
    });

    // export module to use it in other classes
    return Lafete;
});