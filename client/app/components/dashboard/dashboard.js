'use strict';

angular.module('kpilance.dashboard', [])
	.component('dashboard', {
		templateUrl: 'app/components/dashboard/dashboard.html',
		controller: dashboardCtrl,
		controllerAs: 'ctrl',
		bindings: {
			currentUser: '<'
		}
	});

function dashboardCtrl() {
	let ctrl = this;

}