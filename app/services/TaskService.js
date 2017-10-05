
class TaskService {
    constructor(LocalStore) {
        this.tasks = [];
        this.LocalStore = LocalStore;
    }

    addTask(newTask) {
        this.tasks.unshift(newTask);
        this.LocalStore.update(this.tasks);
    }
    
    updateTask(task) {
        this.tasks[this.findIndexById(task.id)] = task;
        this.LocalStore.update(this.tasks);
    }

    getTasks() {
        this.tasks = this.LocalStore.get();        
        return this.tasks;
    }

    deleteTask(task) {
        this.tasks.splice(this.findIndexById(task.id), 1);
        this.LocalStore.update(this.tasks);  
        
        return this.tasks;
    }

    findIndexById(id) {
        return this.tasks.findIndex((item) => {
            return item.id === id;
        });
    }
}

TaskService.$inject = ['LocalStore'];

export default TaskService;