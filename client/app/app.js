'use strict';

angular.module('kpilance', ['ui.router'])
	.config(AuthConfig);

function AuthConfig($stateProvider) {

	let loginState = {
		name: 'login',
		url: '/login',
		component: 'signin'
	}

	$stateProvider.state(loginState);
}