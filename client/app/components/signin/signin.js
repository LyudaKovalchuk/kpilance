'use strict';

angular.module('kpilance')
	.component('signIn', {
		templateUrl: 'app/components/signin/signin.html',
		controller: signInCtrl,
		controllerAs: 'ctrl'
	});

function signInCtrl() {
	let ctrl = this;

	ctrl.login = function(){
		console.log("login");
	}
	
}