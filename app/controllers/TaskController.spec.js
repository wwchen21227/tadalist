 
describe('true', function() {

    beforeEach(angular.mock.module('tadalist'));
    
    describe('TaskController',function() {
        var taskCtrl, scope;
        beforeEach(inject(function($rootScope, $controller){ //instantiate controller using $controller service
            scope = $rootScope.$new();
            taskCtrl = $controller('TaskController', {'$scope': scope});
        }));

        it('Mode should be fun', function(){  //write tests
            expect(scope.originalTask).toBe(undefined); //pass
        });
    });

});