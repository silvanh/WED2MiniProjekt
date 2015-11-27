define(['app/model/event'], function (Event) {
	'use strict';

	var EventFactory = {
		createEvent: function(identifier) {
			return new Event(
				'Lunch',
                'zmittag bim Richi',
                'geili sieche',
                'keini',
                {
                    name: 'Richis Home',
                    street: 'Im Gstrüpp',
                    zipCode: 8640,
                    city: 'Rapperswil'
                },
                10,
                identifier
			);
		}
	};

	return EventFactory;
});