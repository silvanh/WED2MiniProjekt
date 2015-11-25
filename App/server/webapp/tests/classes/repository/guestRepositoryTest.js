define(['tests/factories/guestFactory', 'app/model/guest', 'app/repository/guestRepository', 'app/repository/eventRepository', 'libraries/angularMocks'],
	function (GuestFactory, Guest, GuestRepository, EventRepository, AngularMocks) {
	'use strict';

	describe('GuestRepository', function() {
		var guest, guestRepository, $http, $httpBackend;

		// setup
		beforeEach(AngularMocks.inject(function($injector) {
			$http = $injector.get('$http');
			$httpBackend = $injector.get('$httpBackend');

			eventRepository = new EventRepository($http);
			event = EventFactory.createEvent();

			guestRepository = new guestRepository($http);
			guest = GuestFactory.createGuest();

			$httpBackend.when('GET', guestRepository.urls.all).respond({
				guests: [{id: 1, name: 'Farhad Mehta', contribution: 'Torte', comment: 'Ich bringe eine Torte', canceled: false},
						{id: 2, name: 'Luc Bläser', contribution: 'äpfel', comment: 'Ich bringe eine äpfel', canceled: false}]
			});
		}));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		describe('get()', function() {
			beforeEach(function() {
				eventRepository.add(event);
				guestRepository.add(event.id, guest);
			});

			describe('by object id', function() {
				it('returns the object', function() {
					expect(guestRepository.get(event.id, guest.id)).toEqual(guest);
				});
			});

			describe('by inexistent object id', function() {
				it('returns null', function() {
					expect(guestRepository.get(null, null)).toEqual(null);
					expect(guestRepository.get('abvhf74n6', 'abvhf74n6')).toEqual(null);
				});
			});
		});

		describe('all()', function() {
			it('returns an Array', function() {
				$httpBackend.expectGET(guestRepository.urls.all);
				var guests = null;
				guestRepository.all(function(guestList) {
					guests = guestList;
				});
				$httpBackend.flush();
				expect(guests).toEqual(jasmine.any(Array));
			});

			it('returns two guests', function() {
				$httpBackend.expectGET(guestRepository.urls.all);
				var guests = null;
				guestRepository.all(function(guestList) {
					guests = guestList;
				});
				$httpBackend.flush();
				expect(guests.length).toEqual(2);
			});

			it('returns real javascript objects', function() {
					$httpBackend.expectGET(guestRepository.urls.all);
					var guests = null;
					guestRepository.all(function(guestList) {
						guests = guestList;
					});
					$httpBackend.flush();
					expect(guests[0]).toEqual(jasmine.any(Guest));
					expect(guests[1]).toEqual(jasmine.any(Guest));
			});
		});

		/*describe('add()', function() {
			it('inserts element', function() {
				var status1 = guestRepository.add(guest);
				expect(status1).toBe(true);
			});

			describe('same element again', function() {
				var size, status2;

				beforeEach(function() {
					guestRepository.add(guest);

					size = guestRepository.guests.length;
					status2 = guestRepository.add(guest);
				});

				it('doesn\'t affect repository size', function() {
					expect(guestRepository.guests.length).toBe(size);
				});
				it('returns false', function() {
					expect(status2).toBe(false);
				});
			});
		});*/
	});
});