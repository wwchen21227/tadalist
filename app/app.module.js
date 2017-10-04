import angular from 'angular';
import '../assets/css/base.css';
import LocalStore from './services/LocalStore';
import TaskController from './controllers/TaskController';

angular.module('tadalist', [])
       .factory('LocalStore', LocalStore)
       .controller('TaskController', TaskController);
