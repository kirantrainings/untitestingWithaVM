'use strict';
//Step 1 descirbe the functionality you want to test
describe('JobList Controller', function () {
    //step 2 declare variables for the unit test
    var controller, scope;
    describe('behaviour', function () {
        //step 3 inject the module 
        beforeEach(function () {
            module('app');
        });

        //step 4 inject the controller and scope
        beforeEach(inject(function ($rootScope, $controller) {
            //step 5 create scope from $rootscope and inject it to the controller
            scope = $rootScope.$new();

            //step 6 Create controller and inject the scope and other dependencies
            controller = $controller('jobListCtrl',
            {
                $scope: scope
            });
        }));

        //step 7 Write test cases for the scope object

        it('scope should not be null', function() {
            expect(scope).toBeDefined();
        });

        it('scope should have jobs defined', function () {
            expect(scope.jobs).toBeDefined();
            expect(scope.jobs.length).toEqual(2);
        });

        //testing the add function
        it('should call add function', function () {
            scope.addJob({ name: 'sql', description: "we have a job for oracle" });
            expect(scope.jobs.length).toEqual(3);
        });

    });
})