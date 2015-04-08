(function () {

    var injectParams = ['$http', '$q'];

    var employeesService = function ($http, $q) {
        var serviceBase = 'http://localhost:4539/api/employee',
            factory = {};

        factory.getCustomers = function () {
            return $http.get(serviceBase);
        };

        return factory;
    };

    employeesService.$inject = injectParams;
    angular.module('employeesApp').factory('employeesService', employeesService);

}());