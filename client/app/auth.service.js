'use strict';

angular.module('kpilance.auth')
	.service('AuthService', function() {
		
		this.login = function(user) {
			return new Promise((resolve, reject) => {
				if(user.username == user.password)
					resolve();
				else
					reject();
			});
		};

		this.logout = function() {
			console.log('logout atempt');
		};

	});