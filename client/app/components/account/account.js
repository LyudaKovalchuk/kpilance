'use strict';

angular.module('kpilance')
	.component('account', {
		templateUrl: 'app/components/account/account.html',
		controller: accountCtrl,
		controllerAs: 'ctrl'
	});
	
function accountCtrl(UserService) {
	let ctrl = this;

	ctrl.$onInit = () => {
		UserService
			.getUserContext()
				.then((response) => {
					ctrl.userDetails = response.data.user;
					console.log(ctrl.userDetails);
				});
	};

	ctrl.createPaymentAccount = () => {
		//TODO
	}
	
}