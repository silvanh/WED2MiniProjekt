define(['tests/factories/eventFactory', 'app/model/event', 'app/repository/eventRepository', 'libraries/angularMocks'],
	function (EventFactory, Event, EventRepository, AngularMocks) {
	'use strict';

	describe('EventRepository', function() {
		var event, eventRepository, $http, $httpBackend;

		// setup
		beforeEach(AngularMocks.inject(function($injector) {
			$http = $injector.get('$http');
			$httpBackend = $injector.get('$httpBackend');

			eventRepository = new EventRepository($http);
			event = EventFactory.createEvent();

			$httpBackend.when('GET', eventRepository.urls.all).respond({
				events: [{id: 1, name: 'Party'},{id: 2, name: 'Concert'}]
			});
		}));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		describe('get()', function() {
			beforeEach(function() {
				eventRepository.add(event);
			});

			describe('by object id', function() {
				it('returns the object', function() {
					expect(eventRepository.get(event.id)).toEqual(event);
				});
			});

			describe('by inexistent object id', function() {
				it('returns null', function() {
					expect(eventRepository.get(null)).toEqual(null);
					expect(eventRepository.get('abvhf74n6')).toEqual(null);
				});
			});
		});

		describe('all()', function() {
			it('returns an Array', function() {
				$httpBackend.expectGET(eventRepository.urls.all);
				var events = null;
				eventRepository.all(function(eventList) {
					events = eventList;
				});
				$httpBackend.flush();
				expect(events).toEqual(jasmine.any(Array));
			});

			it('returns two events', function() {
				$httpBackend.expectGET(eventRepository.urls.all);
				var events = null;
				eventRepository.all(function(eventList) {
					events = eventList;
				});
				$httpBackend.flush();
				expect(events.length).toEqual(2);
			});

			it('returns real javascript objects', function() {
					$httpBackend.expectGET(eventRepository.urls.all);
					var events = null;
					eventRepository.all(function(eventList) {
						events = eventList;
					});
					$httpBackend.flush();
					expect(events[0]).toEqual(jasmine.any(Event));
					expect(events[1]).toEqual(jasmine.any(Event));
			});
		});

		/*describe('add()', function() {
			it('inserts element', function() {
				var status1 = eventRepository.add(event);
				expect(status1).toBe(true);
			});

			describe('same element again', function() {
				var size, status2;

				beforeEach(function() {
					eventRepository.add(event);

					size = eventRepository.events.length;
					status2 = eventRepository.add(event);
				});

				it('doesn\'t affect repository size', function() {
					expect(eventRepository.events.length).toBe(size);
				});
				it('returns false', function() {
					expect(status2).toBe(false);
				});
			});
		});*/
	});
});