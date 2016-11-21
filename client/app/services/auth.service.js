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

			// return new Promise((resolve, reject) => {
			// 	if(user.username == user.password) {
			// 		$localStorage.currentUser = user;
			// 		resolve();
			// 	}
			// 	else {
			// 		reject();
			// 	}
			// });
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