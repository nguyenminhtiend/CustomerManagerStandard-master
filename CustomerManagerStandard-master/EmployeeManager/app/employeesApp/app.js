(function () {
    'use strict';

    var app = angular.module('employeesApp', ['ngAnimate', 'ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        var viewBase = '/app/employeesApp/views/';

        $routeProvider
            .when('/employees', {
                controller: 'employeesController',
                templateUrl: viewBase + 'employees.html'
            })
             .when('/addNewEmployee', {
                 controller: 'employeesController',
                 templateUrl: viewBase + 'employeeDetail.html'
             })
            .when('/contact', {
                controller: 'employeesController',
                templateUrl: viewBase + 'contact.html'
            })
            .otherwise({ redirectTo: '/employees' });
    }]);

})();