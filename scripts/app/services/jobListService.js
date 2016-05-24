'use strict';

app.service('jobListService', [
    '$http','$q', function ($http, $q) {
        var jobs = [];
        return {
            getJobsFromService: function () {
                var result = $q.defer();

                $http.get('http://localhost:1761/Job').success(function (response) {
                    // console.log(response);
                    result.resolve(response);
                })
                       .error(function (response) {
                           result.reject("error occured");
                       });
                return result.promise;
            },
            addJob: function (job) {
                jobs.push(job);
            }
        };
    }
]);