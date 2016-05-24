'use strcit';

describe('testing a controller with service',function() {

    var controller, scope, serviceMock, mockJobs, httpBackend;

    mockJobs = 
        [
            { name: 'xxxxx', description: "we have an opening for .net" },
            { name: 'YYY', description: "we have an opening for java" }
        ];
    


    describe('test scope', function() {
     
        beforeEach(function() {
            inject(module('app'));
        });

       
        beforeEach(inject(function ($rootScope, $controller, jobListService,$q) {
          //Mock Service
            serviceMock = jobListService;
            spyOn(serviceMock, 'getJobsFromService').andCallFake(function () {
                if (true) {
                    return $q.when(mockJobs);
                }
                else {
                    return $q.reject("Something went wrong");
                }
            });
          
            scope = $rootScope.$new();
            controller = $controller('jobListWithServiceCtrl',
                {
                    $scope: scope,
                    service :serviceMock
                });
        }));

        it('should have scope defined', function() {
            expect(scope).toBeDefined();
            expect(serviceMock.getJobsFromService).toHaveBeenCalled();
        });
    });
})