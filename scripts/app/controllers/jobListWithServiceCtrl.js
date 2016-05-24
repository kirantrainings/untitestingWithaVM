'use strict';
app.controller('jobListWithServiceCtrl', [
    '$scope', 'jobListService', function ($scope, service) {

        $scope.addJob = function (job) {
            service.addJob(job);
        };
        var intializeController = function() {
            service.getJobsFromService().then(function(data) {
                $scope.jobs = data;
            });
        };

        intializeController();
    }
]);