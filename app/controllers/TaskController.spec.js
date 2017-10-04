describe('TaskController', function() {
    var $controller, TaskController;

    beforeEach(angular.mock.module('tadalist'));

    // Inject the $controller service to create instances of the controller (UsersController) we want to test
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        TaskController = $controller('TaskController', {});
    }));

    // Verify our controller exists
    it('should be defined', function() {
        expect(TaskController).toBeDefined();
    });
});