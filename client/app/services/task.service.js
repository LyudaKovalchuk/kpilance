'use strict';

angular.module('kpilance')
	.service('TaskService', function($http, API) {

		this.getTasks = (from, quantity, subject, orderBy) => {
			return $http({
				url: API + '/task',
				method: 'GET',
				params: {
					from: from,
					quantity: quantity,
					subject: subject,
					orderBy: orderBy
				}
			});
		};

	});