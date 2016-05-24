'use strict';
app.controller('jobListCtrl', [

    function () {
        var vm = this;
        vm.jobs = [];


        vm.addJob = function (job) {
            $scope.jobs.push(job);
        };
        var initializeController = function () {

            vm.jobs = [
                {
                    name: '.Net',
                    description: "we have an opening for .net"
                },
                {
                    name: 'java',
                    description: "we have an opening for java"
                }
            ];
        };

        initializeController();
    }
]);
