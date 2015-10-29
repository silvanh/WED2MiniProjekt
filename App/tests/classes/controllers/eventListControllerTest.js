/**
 * Created by silvan on 10/21/15.
 */


define(['app/controllers/eventListController', 'frameworks/angular', 'libraries/angularMocks', 'app/services/storageService'],
    function (EventListController, Angular, AngularMocks, StorageService) {
    'use strict';
    var eventListController;

    beforeEach(AngularMocks.inject(function($rootScope){
        var scope = $rootScope.$new();
        var storageService = new StorageService();
        eventListController = new EventListController(scope, storageService);
    }));

    describe('EventListController', function() {
        describe('property scope', function() {
            it('contains 3 events', function() {
                expect(3).toBe(eventListController.scope.events.length);
            });
        });
    });
});