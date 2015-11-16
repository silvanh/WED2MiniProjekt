require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'frameworks/angular': ['frameworks/angular/angular.min'],
        'libraries/angularRoute': ['libraries/angularRoute/angular-route.min'],
        'app': ['classes'],
        'moment': ['libraries/moment/moment']
    },
    // angular does not support async loading out of the box -> use the shim loader
    shim: {
        'frameworks/angular': {
            exports: 'angular'
        },
        'libraries/angularRoute': {
                deps: ['frameworks/angular']
        }
    }
});

require(['frameworks/angular', 'app/modules/lafete'], function (Angular, Lafete) {
    Angular.element(document).ready(function() {
        Angular.bootstrap(document, [Lafete.name]);
    });
});
