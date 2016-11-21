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

function userbarCtrl($state, AuthService) {
	let ctrl = this;

	ctrl.goDashboard = () => {
		$state.go('dashboard');
	};

	ctrl.goAccount = () => {
		$state.go('account');
	};

	ctrl.login = () => {
		$state.go('login');
	};

	ctrl.logout = () => {
		AuthService.logout()
			.then((response) => {
				$state.go('dashboard', {}, { reload: true });
			});
	};	

}