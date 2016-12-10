'use strict';

angular.module('kpilance')
	.component('user', {
		templateUrl: 'app/components/account/user/user.html',
		controller: userCtrl,
		controllerAs: 'ctrl'
	});
	
function userCtrl(UserService) {
	let ctrl = this;

	ctrl.$onInit = () => {
		UserService
			.getUserContext()
				.then((response) => {
					ctrl.userDetails = response.data.user;
				});
	};

}