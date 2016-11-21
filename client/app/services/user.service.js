'use strict'

angular.module('kpilance')
	.service('UserService', function($http, $localStorage, API) {

		this.registr = (user) => {
			// return $http({
			// 	url: API + '/auth',
			// 	method: 'POST',
			// 	data: user

			// }).then((response) => {
			// 	$localStorage.currentUser = response.user;
			// 	JWTService.save(response.token);

			// 	$http.defaults.headers.common.Authorization = JWTService.getToken();
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

		this.getUserContext = () => {
			return $http({
				url: API + '/user/' + $localStorage.currentUser.username,
				method: 'GET'
			});
		};

		this.getUserDetails = (username) => {
			return $http({
				url: API + '/user/' + username,
				method: 'GET'
			});
		};
	});