define(['tests/factories/eventFactory', 'tests/factories/guestFactory', 'app/model/guest', 'app/repository/guestRepository', 'app/repository/eventRepository', 'libraries/angularMocks'],
	function (EventFactory, GuestFactory, Guest, GuestRepository, EventRepository, AngularMocks) {
	'use strict';

	describe('GuestRepository', function() {
		var guest, guests, guestRepository, $http, $httpBackend, eventRepository;

		// setup
		beforeEach(AngularMocks.inject(function($injector) {
			$http = $injector.get('$http');
			$httpBackend = $injector.get('$httpBackend');

			eventRepository = new EventRepository($http);
			event = EventFactory.createEvent(1);

			guestRepository = new GuestRepository($http);
			guest = GuestFactory.createGuest(1);
			guests = [GuestFactory.createGuest(1), GuestFactory.createGuest(2)];

			$httpBackend.when('GET', '/api/events/1/guests/1').respond(guest);
			$httpBackend.when('GET', '/api/events/1/guests/null').respond(404, 'Guest (id null) not found.');
			$httpBackend.when('GET', '/api/events/1/guests/dsaljfds').respond(404, 'Guest (id dsaljfds) not found.');
			$httpBackend.when('POST', '/api/guests').respond(event);
			$httpBackend.when('GET', guestRepository.urls.all).respond({
				guests: guests
			});
		}));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		describe('get()', function() {
			describe('by object id', function() {
				it('returns the object', function() {
					guestRepository.get(event.id, guest.id, function(newGuest) {
						expect(newGuest.id).toEqual(guest.id);
					}, function(){};
					$httpBackend.flush();
				});
			});

			describe('by inexistent object id', function() {
				it('returns null', function() {
					guestRepository.get(null, null, function(){}, function(error){
						expect(error).toEqual('Event (id null) not found.');
					});
					guestRepository.get('abvhf74n6', 'abvhf74n6', function(){}, function(error){
						expect(error).toEqual('Guest (id dsaljfds) not found.')
					});
					$httpBackend.flush();
				});
			});
		});

		describe('all()', function() {
			it('returns an Array', function() {
				guestRepository.all(function(guests) {
					expect(guests).toEqual(jasmine.any(Array));
				});
				$httpBackend.flush();
			});

			it('returns two guests', function() {
				guestRepository.all(function(guests) {
					expect(guests.length).toEqual(2);
				});
				$httpBackend.flush();
			});

			it('returns real javascript objects', function() {
				guestRepository.all(function(guests) {
					expect(guests[0]).toEqual(jasmine.any(Guest));
					expect(guests[1]).toEqual(jasmine.any(Guest));
				});
				$httpBackend.flush();
			});
		});

		describe('add()', function() {
			it('inserts element', function() {
				guestRepository.add(guest, function(newGuest){
					expect(newGuest.id).toEqual(guest.id);
				}, function(){});
				$httpBackend.flush();
			});
		});
	});
});