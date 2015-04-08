(function () {
    'use strict';

    var injectParams = ['$scope', 'employeesService'];

    var employeesController = function ($scope, employeesService) {
        $scope.title = "Hello world!";
       
        function init() {
            var promise = employeesService.getCustomers();
            promise.then(function (result) {
                $scope.employees = result.data;
            },
           function (error) {
               $log.error('Some Error in Getting Records.', error);
           });
            
        }
        init();
    };

    employeesController.$inject = injectParams;

    angular.module('employeesApp').controller('employeesController', employeesController);
})();
