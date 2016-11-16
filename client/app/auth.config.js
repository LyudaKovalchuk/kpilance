'use strict';

angular.module('kpilance.auth', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		let loginState = {
			name: 'login',
			url: '/login',
			templateUrl: 'app/components/login/login.html'
		};

		let homeState = {
			name: 'dashboard',
			url: '/',
			component: 'dashboard'
		};

		$stateProvider.state(loginState);
		$stateProvider.state(homeState);
		
		$urlRouterProvider.otherwise('/');

	});