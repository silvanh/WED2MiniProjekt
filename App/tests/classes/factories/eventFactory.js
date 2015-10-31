define(['app/model/event'], function (Event) {
	'use strict';

	var EventFactory = {
		createEvent: function() {
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
                    begin: new Date('2015-10-10T12:00:00.000Z'),
                    end: new Date('2015-10-10T13:00:00.000Z')
                },
                10
			);
		}
	};

	return EventFactory;
});