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
			url: '/',
			component: 'dashboard',
			resolve: {
				currentUser: (AuthService) => {
					return AuthService.authUser();
				}
			}
		};

		let accountState = {
			name: 'account',
			url: '/account',
			component: 'account',
			resolve: {
				currentUser: (AuthService) => {
					return AuthService.authUser();
				}
			}
		};

		$stateProvider.state(loginState);
		$stateProvider.state(homeState);
		$stateProvider.state(accountState);
		
		$urlRouterProvider.otherwise('/login');

	});