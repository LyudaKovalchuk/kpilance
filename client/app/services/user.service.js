'use strict'

angular.module('kpilance')
	.service('UserService', function($http, $localStorage, API) {
		this.registr = (user) => {
			return $http({
				url: API + '/registr',
				method: 'POST',
				data: user

			}).then((response) => {
				$localStorage.currentUser = response.data.user;
				return response;
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