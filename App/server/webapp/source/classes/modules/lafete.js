/**
 * Created by silvan on 10/21/15.
 */
// declare dependency to angular (similar to import in java)
define(['frameworks/angular', 'libraries/angularRoute','libraries/ngAnimate/angular-animate.min', 'app/services/notificationservice',
    'app/controllers/event/listController', 'app/controllers/event/detailController', 'app/controllers/event/addController','app/controllers/event/editController','app/controllers/guest/addController', 'app/controllers/guest/editController',
    'app/repository/eventRepository', 'app/repository/guestRepository','libraries/bootstrap/js/ui-bootstrap-tpls-0.14.3.min','libraries/dateTimePicker/js/datetimepicker',
    'libraries/angularToaster/toaster.min'],
    function (Angular, ngRoute, ngAnimate, NotificationService, EventListController, EventDetailController, EventAddController, EventEditController,  GuestAddController, GuestEditController, EventRepository, GuestRepository) {
    'use strict'

    // modules
    var Lafete = Angular.module('lafete', ['ngRoute', 'ui.bootstrap','ui.bootstrap.datetimepicker','ngAnimate','toaster']);

    // services
    EventRepository.$inject = ['$http'];
    GuestRepository.$inject = ['$http'];
    Lafete.service('EventRepository', EventRepository);
    Lafete.service('GuestRepository', GuestRepository);
    Lafete.service('NotificationService', NotificationService);

    // controllers
    EventListController.$inject = ['$scope','EventRepository'];
    Lafete.controller('EventListController', EventListController);
    
    EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository', 'GuestRepository', '$location'];
    Lafete.controller('EventDetailController', EventDetailController);

    EventAddController.$inject = ['$scope', '$location', 'EventRepository','NotificationService'];
    Lafete.controller('EventAddController', EventAddController);

    EventEditController.$inject = ['$scope','$routeParams', 'EventRepository', '$location','NotificationService'];
    Lafete.controller('EventEditController', EventEditController);

    GuestAddController.$inject = ['$scope','$routeParams', 'GuestRepository', '$location','NotificationService'];
    Lafete.controller('GuestAddController', GuestAddController);

    GuestEditController.$inject = ['$scope','$routeParams', 'GuestRepository', '$location','NotificationService'];
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
        .when('/events/:eventId/editEvent',{
            controller: 'EventEditController',
            templateUrl: '/views/event/edit.html'
        })
        .when('/add', {
           controller: 'EventAddController',
           templateUrl: '/views/event/add.html'
        })
        .when('/events/:eventId/addGuest',{
            controller: 'GuestAddController',
            templateUrl: '/views/guest/add.html'
        })
        .when('/events/:eventId/editGuest/:guestId',{
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