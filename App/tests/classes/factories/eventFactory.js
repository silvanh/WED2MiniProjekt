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
                {
                    begin: new Date('2015-10-10T18:00:00.000Z'),
                    end: new Date('2015-10-11T02:00:00.000Z')
                },
                10,
                identifier
			);
		}
	};

	return EventFactory;
});