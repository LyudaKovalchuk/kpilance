'use strict';

angular.module('kpilance')
	.component('signIn', {
		templateUrl: 'app/components/login/signin/signin.html',
		controller: signInCtrl,
		controllerAs: 'ctrl'
	});

function signInCtrl(AuthService) {
	let ctrl = this;
	
	ctrl.user = {};

	ctrl.signin = function() {
		ctrl.submitted = true;

		AuthService.login(ctrl.user)
			.then((res) => {
				ctrl.submitted = false;
				console.log("OK");
			})
			.catch((res) => {
				ctrl.submitted = false;
				console.log("NO");
			});
	}
	
}