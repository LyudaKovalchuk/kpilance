'use strict';

angular.module('kpilance.taskboard')
	.component('taskItem', {
		templateUrl: 'app/components/taskitem/taskitem.html',
		controller: itemCtrl,
		controllerAs: 'ctrl',
		bindings: {
			details: '<'
		}
	});

function itemCtrl() {
	let ctrl = this;

}