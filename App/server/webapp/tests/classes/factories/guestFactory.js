define(['app/model/guest'], function (Guest) {
	'use strict';

	var GuestFactory = {
		createGuest: function(identifier) {
			return new Guest(
				'Markus Stolze',
				'Kuchen',
				'Ich trinke nur Jägermeister',
				false,
				identifier
			);
		}
	};

	return GuestFactory;
});