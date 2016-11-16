'use strict';

angular.module('kpilance.auth', ['ui.router'])
	.config(function($stateProvider) {
		
		let loginState = {
			name: 'login',
			url: '/login',
			templateUrl: 'app/components/login/login.html'
		};

		$stateProvider.state(loginState);
	});