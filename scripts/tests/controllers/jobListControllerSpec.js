describe('Test-Job List Controller', function () {
    var usdScope, usdCtrl;

    beforeEach(function () {
        module('app');
    });
    beforeEach(inject(function ($rootScope, $controller) {
        usdScope = $rootScope.$new();

        usdCtrl = $controller('jobListCtrl', {

        });
    }));


    describe('scope testing', function () {

        it('scope should not be null', function () {
            expect(usdCtrl).toBeDefined();
        });

        it('scope should have jobs', function () {
            expect(usdCtrl.jobs).toBeDefined();
        });

        it('Job length should be equal to 2', function () {
            expect(usdCtrl.jobs.length).toBe(2);
        });
    });
});
