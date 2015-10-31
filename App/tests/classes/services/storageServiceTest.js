define(['tests/factories/eventFactory', 'app/model/event', 'app/services/storageService'], function (EventFactory, Event, StorageService) {
	'use strict';

	describe('EventStorageService test suite', function() {
		var event, storageService;

		// setup
		beforeEach(function() {
			storageService = new StorageService();
			event = EventFactory.createEvent();
			storageService.events.add(event);
 		});

		describe('get()', function() {
			beforeEach(function() {
				
			});

			describe('by object id', function() {
				it('returns the object', function() {
					expect(storageService.events.get(event.id)).toEqual(event);
				});
			});

			describe('by inexistent object id', function() {
				it('returns null', function() {
					expect(storageService.events.get(event.id) + "inexistent").not.toEqual(event.id);
				});
			});
		});


		describe('all()', function() {
			it('returns an Array', function() {
				expect(typeof storageService.events.all()).toEqual("object");
			});
		});

		describe('add()', function() {
			it('inserts element', function() {
				expect(storageService.events.add(event)).toBe(false);
			});

			describe('same element again', function() {

				beforeEach(function() {
					storageService.events.add(event);
				});

				it('doesn\'t affect repository size', function() {
					storageService.events.add(event);
					expect(storageService.events.all().length).toBe(1);
				});

				it('returns false', function() {
					expect(storageService.events.add(event)).toBe(false);
				});
			});
		});
	});
});