class TaskController {
  constructor($scope, LocalStore) {
    this.LocalStore = LocalStore;
    this.$scope = $scope;
  }

  resetEditTask() {
    this.$scope.originalTask = null;
    this.$scope.selectedTask = null;
  }

  // This method will be called each time the component will be initialised,
  // In our case, it will be called for every page route change.
  $onInit(){
    this.taskList = this.LocalStore.get();
    
    this.$scope.taskList = this.taskList;
    this.$scope.newTask = '';
    this.$scope.selectedTask = null;
  }

  handleAddTask() {
      const newTask = {
        title: this.$scope.newTask.trim(),
        isCompleted: false
      };
      if(newTask.title === '') {
        return;
      }
      this.$scope.taskList.unshift(newTask);
      this.$scope.newTask = '';
      this.LocalStore.update(this.$scope.taskList);
  }

  handleDeleteTask(task) {
    this.$scope.taskList.splice(this.$scope.taskList.indexOf(task), 1);
    this.LocalStore.update(this.$scope.taskList);
  }

  handleToggleTask() { 
    this.LocalStore.update(this.$scope.taskList);
  }

  handleEditTask(task) {
    this.$scope.originalTask = Object.assign({}, task);
    this.$scope.selectedTask = task;
  }

  handleSave() {
    this.LocalStore.update(this.$scope.taskList);
    this.resetEditTask();
  }

  handleCancelEdit(task) {
    this.taskList[this.taskList.indexOf(task)] = this.$scope.originalTask;
    this.resetEditTask();
  }
}

TaskController.$inject = ['$scope', 'LocalStore'];
export default TaskController;  