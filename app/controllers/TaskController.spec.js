describe('TaskController', function() {
    beforeEach(module('tadalist'));
  
    var $controller,  
        $scope,
        TaskService;

    beforeEach(function() {
        TaskService = jasmine.createSpyObj('TaskService', [
            'addTask',
            'getTasks'
        ]);

        module(function ($provide) {
            $provide.value('TaskService', TaskService);
        });
    });
  
    beforeEach(inject(function($rootScope, _$controller_) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
    }));
  
    it('Controller Exist', function() {
        expect($controller).toBeDefined();
    });

    it('Task Controller Init', function() {
        $scope.taskList = [];
        var $ctr = $controller('TaskController', { 
            $scope: $scope, 
            TaskService: TaskService
        });
        $ctr.$onInit();
        expect($scope.taskList.length).toBe(0);
        expect($scope.newTask).toEqual('');
        expect($scope.selectedTask).toEqual(null);
    });
   
  });