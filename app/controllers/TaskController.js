class TaskController {
  constructor($scope, TaskService) {
    this.TaskService = TaskService;
    this.$scope = $scope;
  }

  resetEditTask() {
    this.$scope.originalTask = null;
    this.$scope.selectedTask = null;
  }

  // This method will be called each time the component will be initialised,
  // In our case, it will be called for every page route change.
  $onInit(){
    this.taskList = this.TaskService.getTasks();
  
    this.$scope.taskList = this.taskList;
    this.$scope.newTask = '';
    this.$scope.selectedTask = null;
  }

  handleAddTask() {
      const newTask = {
        id: this.taskList.length + 1,
        title: this.$scope.newTask.trim(),
        isCompleted: false
      };
      if(newTask.title === '') {
        return;
      }
      
      this.TaskService.addTask(newTask);
      this.$scope.newTask = '';
  }

  handleDeleteTask(task) {
    this.TaskService.deleteTask(task);
  }

  handleToggleTask(task) {
    this.TaskService.updateTask(task); 
  }

  handleEditTask(task) {
    this.$scope.originalTask = Object.assign({}, task);
    this.$scope.selectedTask = task;
  }

  handleSave(task) {
    this.TaskService.updateTask(task);
    this.resetEditTask();
  }

  handleCancelEdit(task) {
    this.taskList[this.taskList.indexOf(task)] = this.$scope.originalTask;
    this.resetEditTask();
  }
}

TaskController.$inject = ['$scope', 'TaskService'];
export default TaskController;  