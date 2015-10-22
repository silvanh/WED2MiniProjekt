/**
 * Created by silvan on 10/21/15.
 */
require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'frameworks/angular': 'frameworks/angular/angular.min',
        'app'               : 'classes'
    },
    // angular does not support async loading out of the box -> use the shim loader
    shim: {
        'frameworks/angular': {
            exports: 'angular'
        }
    }
});

define(['frameworks/angular', 'app/modules/lafete'], function (Angular, Lafete) {
    return Angular.bootstrap(Lafete);
});
