/**
 * Created by silvan on 10/21/15.
 */


define(['tests/factories/eventFactory', 'app/controllers/eventListController', 'frameworks/angular', 'libraries/angularMocks', 'app/services/storageService'],
    function (EventFactory, EventListController, Angular, AngularMocks, StorageService) {
    'use strict';
    var eventListController;

    beforeEach(AngularMocks.inject(function($rootScope){
        var scope = $rootScope.$new();
        var storageService = new StorageService();
        eventListController = new EventListController(scope, storageService);
        event = EventFactory.createEvent();
        eventListController.scope.events.add(event);
    }));

    describe('EventListController', function() {
        describe('property scope', function() {
            it('contains 3 events', function() {
                expect(1).toBe(eventListController.scope.events.all().length);
            });
            it('Expects event id to be UUID', function() {
                var uuidRegex = new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');
                var events = eventListController.scope.events.all();
                expect(events[0].id).toMatch(uuidRegex);
            });
        });
    });
});