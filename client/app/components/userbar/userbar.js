'use strict'

angular.module('kpilance.dashboard')
	.component('userbar', {
		templateUrl: 'app/components/userbar/userbar.html',
		controller: userbarCtrl,
		controllerAs: 'ctrl',
		bindings: {
			user: '<'
		}
	});

function userbarCtrl($state) {
	let ctrl = this;

	ctrl.goDashboard = () => {
		$state.go('dashboard');
	};

	ctrl.goLogin = () => {
		$state.go('login');
	};

	ctrl.goAccount = () => {
		$state.go('account');
	};
}