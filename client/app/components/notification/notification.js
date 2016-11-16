'use strict';

angular.module('kpilance')
	.component('notification', {
		templateUrl: 'app/components/notification/notification.html',
		controller: NotifCtrl,
		controllerAs: 'ctrl',
		bindings: {
			message: '<'
		}
	});

function NotifCtrl() {
	let ctrl = this;
	
}