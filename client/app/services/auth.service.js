'use strict';

angular.module('kpilance.auth')
	.service('AuthService', function($http, $localStorage, API) {
		this.login = (user) => {
			return $http({
				url: API + '/auth',
				method: 'POST',
				data: user

			}).then((response) => {
				$localStorage.currentUser = response.data.user;
				// JWTService.save(response.token);

				return response;
			});
		};

		this.logout = () => {

			$localStorage.currentUser = null;
			
			return $http({
				url: API + '/logout',
				method: 'DELETE',
			});

			// JWTService.destroy();

		};

		this.authUser = () => {
			return $localStorage.currentUser;
		};

	});
	// .service('JWTService', function($localStorage) {

	// 	this.save = (token) => {
	// 		$localStorage.token = token;
	// 	};
		
	// 	this.logout = () => {
	// 		$localStorage.currentUser = null;

	// 		// JWTService.destroy();
	// 		// $http.defaults.headers.common.Authorization = '';

	// 	};

	// 	this.authAtemp = () => {
	// 		return $localStorage.currentUser;
	// 	}

	// });