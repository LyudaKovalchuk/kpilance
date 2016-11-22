'use strict';

angular.module('kpilance.dashboard', ['kpilance.taskboard'])
	.component('dashboard', {
		templateUrl: 'app/components/dashboard/dashboard.html',
		controller: dashboardCtrl,
		controllerAs: 'ctrl',
		bindings: {
			currentUser: '<'
		}
	});

function dashboardCtrl($http) {
	let ctrl = this;

	ctrl.search = () => {
		//TODO
	};

}