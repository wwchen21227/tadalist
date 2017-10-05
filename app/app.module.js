import angular from 'angular';
import '../assets/css/base.css';
import LocalStore from './services/LocalStore';
import TaskService from './services/TaskService';
import TaskController from './controllers/TaskController';

angular.module('tadalist', [])
       .service('LocalStore', LocalStore)
       .service('TaskService', TaskService)
       .controller('TaskController', TaskController);
