describe('KiranTest-Controller with service',function(){
    var usdScope,usdCtrl,mockService,mockJobs;
    mockJobs= [
            { name: 'xxxxx', description: "we have an opening for .net" },
            { name: 'YYY', description: "we have an opening for java" }
        ];
     
    beforeEach(function(){
        module('app');   
    });
    
    beforeEach(inject(function($rootScope,
                               $controller,
                               jobListService,
                               $q){
        usdScope=$rootScope.$new();
        
        //Creating the mock functionlaity
        //jobListService having two functions
        // 1. addJob 2. getJobs
        mockService = jobListService;
       
        spyOn(mockService,'getJobsFromService')
                    .andCallFake(function(){
            return $q.when(mockJobs)
        })
        
        
        
        usdCtrl =$controller('jobListWithServiceCtrl',{
            $scope:usdScope,
            service:mockService
        });
    }));
    
    describe('test scenarios',function(){
           
           it('should have scope',function(){
                expect(usdScope).toBeDefined();
           }); 
           it('should have service',function(){

           });
    });
});