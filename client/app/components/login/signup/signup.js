'use strict';

angular.module('kpilance')
	.component('signUp', {
		templateUrl: 'app/components/login/signup/signup.html',
		controller: signUpCtrl,
		controllerAs: 'ctrl'
	});

function signUpCtrl() {
	let ctrl = this;
	
	ctrl.user = {}

	ctrl.signup = function() {
		console.log(ctrl.user.username, ctrl.user.email, ctrl.user.passwordConfirm, ctrl.user.passwordConfirm)
		console.log("Registr succesful")
	}
}