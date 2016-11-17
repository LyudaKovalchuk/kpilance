'use strict';

angular.module('kpilance')
	.component('signUp', {
		templateUrl: 'app/components/login/signup/signup.html',
		controller: signUpCtrl,
		controllerAs: 'ctrl'
	});

function signUpCtrl(UserService, $state) {
	let ctrl = this;
	
	ctrl.user = {};

	ctrl.signup = function() {
		ctrl.submitted = true;

		UserService.registr(ctrl.user)
			.then((res) => {
				ctrl.submitted = false;
				$state.go('dashboard');
			})
			.catch((res) => {
				ctrl.submitted = false;
				ctrl.message = 'Error';
			});
	}

}
