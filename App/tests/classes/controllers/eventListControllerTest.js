/**
 * Created by silvan on 10/21/15.
 */


define(['app/controllers/eventListController'], function (EventListController) {
    'use strict';

    describe('EventListController', function() {
        describe('property scope', function() {
            it('contains 3 events', function() {
                var scope = {};
                var eventListController = new EventListController(scope);

                expect(3).toBe(eventListController.scope.events.length);
            });
        });
    });
});