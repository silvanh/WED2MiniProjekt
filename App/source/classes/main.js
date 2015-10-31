/**
 * Created by silvan on 10/21/15.
 */
require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'frameworks/angular': ['frameworks/angular/angular.min'],
        'libraries/angularRoute': ['libraries/angularRoute/angular-route.min'],
        'app': ['classes']
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
