

describe('Job List controller', function () {
    var scope, ctrl;
    beforEach(function () {
        module('app');
    });

    beforeEach(
        inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller('jobListCtrl', {
                $scope: scope
            });
        })
    );
    describe('unit tests', function () {
        it('scope should be defined', function () {
            expect(scope).toBeDefined();
        });

        it('scope should have jobs', function () {

        });

        it('add job should add a job to jobs array', function () {

        });
    });
});