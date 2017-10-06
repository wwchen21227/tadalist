describe("Task Service", function () {
    var TaskService;
  
    beforeEach(module("tadalist"));
  
    beforeEach(inject(function (_TaskService_) {
        TaskService = _TaskService_;
    }));
  
    it("task should be empty by default", function () {
        expect(TaskService.tasks.length).toBe(0);
    });
    
    it("Add new task", function () {
        var task = {id:1, title: 'Hello World', isCompleted: false};
        TaskService.addTask(task);
        expect(TaskService.tasks.length).toBe(1);
    });

    it("Update task", function () {
        var task = {id:1, title: 'Hello World', isCompleted: false};
        TaskService.addTask(task);

        task.title = 'Hello World Today';
        TaskService.updateTask(task);
        expect(TaskService.find(task.id)).toEqual(task);
    });

    it("Get task by id", function () {
        var id = 1;
        expect(TaskService.find(id)).toEqual(undefined);

        var task = {id:1, title: 'Hello World', isCompleted: false};
        TaskService.addTask(task);

        expect(TaskService.find(id)).toEqual(task);
    });

    it("Delete task", function () {
        var task = {id:1, title: 'Hello World', isCompleted: false};
        TaskService.addTask(task);
        expect(TaskService.tasks.length).toBe(1);

        TaskService.deleteTask(task);
        expect(TaskService.tasks.length).toBe(0);
    });

  });