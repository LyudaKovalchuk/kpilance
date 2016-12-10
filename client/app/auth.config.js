'use strict';

angular.module('kpilance.auth', ['ui.router', 'ngStorage'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		let loginState = {
			name: 'login',
			url: '/login',
			templateUrl: 'app/components/login/login.html'
		};

		let homeState = {
			name: 'dashboard',
			url: '/dashboard',
			component: 'dashboard',
			resolve: {
				currentUser: (AuthService) => {
					return AuthService.authUser();
				}
			}
		};

		let accountState = {
			parent: homeState,
			name: 'account',
			url: '/account',
			templateUrl: 'app/components/account/account.html'
		};

		let taskState = {
			parent: homeState,
			name: 'task',
			url: '/task',
			templateUrl: 'app/components/task/task.html'
		};


		$stateProvider.state(loginState);
		$stateProvider.state(homeState);
		$stateProvider.state(accountState);
		$stateProvider.state(taskState);
		
		$urlRouterProvider.otherwise('/dashboard');

	});