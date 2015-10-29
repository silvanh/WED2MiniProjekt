/**
 * Created by silvan on 10/28/15.
 */
define(['app/model/event'], function(Event) {
    'use strict';

    var StorageService = function() {
        this.events=[
            //name, description, targetGroup, contributionsDescription, location, times, maximalAmountOfGuests
            new Event(
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
            ),
            new Event(
                'Dinner',
                'znacht mit em Martin Horat',
                'Wetterschmöcker',
                'keini',
                {
                    name: 'I de Natur',
                    street: 'Muotatalerstrasse',
                    zipCode: 6436,
                    city: 'Muotathal'
                },
                {
                    begin: new Date('2015-04-05T16:00:00.000Z'),
                    end: new Date('2015-04-05T18:00:00.000Z')
                },
                5
            ),
            new Event(
                'Dinner',
                'znacht mit de Redneckts',
                'Obergeili Redneckts mit fette Autos',
                'keini',
                {
                    name: 'Am Arsch vode Welt',
                    street: 'Rednecktsheaven',
                    zipCode: 1234,
                    city: 'Swamp'
                },
                {
                    begin: new Date('2015-12-08T17:00:00.000Z'),
                    end: new Date('2015-12-08T20:00:00.000Z')
                },
                1000
            )
        ];
    }


    return StorageService;
});