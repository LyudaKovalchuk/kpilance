'use strict';

angular.module('kpilance.auth')
	.service('AuthService', function($http, $localStorage, $q, JWTService, API) {

		this.login = (user) => {
			// return $http({
			// 	url: API + '/auth',
			// 	method: 'POST',
			// 	data: user

			// }).then((response) => {
			// 	$localStorage.currentUser = response.user;
			// 	JWTService.save(response.token);

			// 	return response;
			// });

			return new Promise((resolve, reject) => {
				if(user.username == user.password) {
					$localStorage.currentUser = user;
					resolve();
				}
				else {
					reject();
				}
			});
		};

		this.logout = () => {

			// let responsePromise = $http({
			// 	url: API + '/logout',
			// 	method: 'POST',
			// 	data: $localStorage.currentUser;
			// });

			// $localStorage.currentUser = null;
			// JWTService.destroy();

			// return responsePromise;


			$localStorage.currentUser = null;
			return new Promise((resolve, reject) => {
				resolve();
			});

		};

		this.authUser = () => {
			return $localStorage.currentUser;
		}

	})
	.service('JWTService', function($localStorage) {

		this.save = (token) => {
			$localStorage.token = token;
		};

		this.destroy = () => {
			$localStorage.token = null;
		};

		this.getToken = () => {
			return $localStorage.token;
		}
	});