(function () {
    'use strict';

    var app = angular.module('employeesApp', ['ngAnimate', 'ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        var viewBase = '/app/employeesApp/views/';

        $routeProvider
            .when('/employees', {
                controller: 'employeesController',
                templateUrl: viewBase + 'customers.html'
            })
            .when('/contact', {
                controller: 'employeesController',
                templateUrl: viewBase + 'contact.html'
            })
            .otherwise({ redirectTo: '/employees' });
    }]);

})();