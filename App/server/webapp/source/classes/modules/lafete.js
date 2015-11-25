/**
 * Created by silvan on 10/21/15.
 */
// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'libraries/angularRoute',
    'app/controllers/event/listController', 'app/controllers/event/detailController', 'app/controllers/event/addController','app/controllers/guest/addController', 'app/controllers/guest/editController',
    'app/repository/eventRepository', 'app/repository/guestRepository','libraries/bootstrap/js/ui-bootstrap-tpls-0.14.3.min','libraries/dateTimePicker/js/datetimepicker'],
    function (Angular, ngRoute, EventListController, EventDetailController, EventAddController, GuestAddController, GuestEditController, EventRepository, GuestRepository) {
    'use strict'

    // modules
    var Lafete = Angular.module('lafete', ['ngRoute', 'ui.bootstrap','ui.bootstrap.datetimepicker']);

    // services
    EventRepository.$inject = ['$http'];
    GuestRepository.$inject = ['$http'];
    Lafete.service('EventRepository', EventRepository);
    Lafete.service('GuestRepository', GuestRepository);

    // controllers
    EventListController.$inject = ['$scope','EventRepository'];
    Lafete.controller('EventListController', EventListController);
    
    EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository', 'GuestRepository', '$location'];
    Lafete.controller('EventDetailController', EventDetailController);

    EventAddController.$inject = ['$scope', '$location', 'EventRepository'];
    Lafete.controller('EventAddController', EventAddController);

    GuestAddController.$inject = ['$scope','$routeParams', 'GuestRepository', '$location'];
    Lafete.controller('GuestAddController', GuestAddController);

    GuestEditController.$inject = ['$scope','$routeParams', 'GuestRepository', '$location'];
    Lafete.controller('GuestEditController', GuestEditController);

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
        }).when('/events/:eventId/addGuest',{
            controller: 'GuestAddController',
            templateUrl: '/views/guest/add.html'
        }).when('/events/:eventId/editGuest/:guestId',{
            controller: 'GuestEditController',
            templateUrl: '/views/guest/edit.html'
        })
        .otherwise({
            redirectTo: '/events'
        });
    });

    // export module to use it in other classes
    return Lafete;
});