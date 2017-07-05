// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require angular/angular
//= require angular-ui-router/release/angular-ui-router
//= require angular-rails-templates
//= require_tree ../templates
//= require_self
//= require controllers/task

var app = angular.module('rails-task-list', ['ui.router','templates']);

app.config([
	'$stateProvider', 
	'$urlRouterProvider', 
	'$locationProvider', 
	function($stateProvider, $urlRouterProvider, $locationProvider){
		$stateProvider.state('t', {
			url: '/',
			templateUrl: 'tasks.html',
			controller: 'TaskCtrl'
		});
		$stateProvider.state('tt', {
			url: '/tasklist',
			templateUrl: 'task_list.html',
			controller: 'TaskCtrl'
		});

		$stateProvider.state('ttt', {
			url: '/delete_task/id',
			templateUrl: 'tasks.html',
			controller: 'TaskCtrl'
		});


		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode({
			enabled:true,
			requireBase: false
		});
	}]);

