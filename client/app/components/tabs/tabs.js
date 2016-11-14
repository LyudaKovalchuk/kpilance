'use strict';

angular.module('kpilance')
	.component('tabs', {
		templateUrl: 'app/components/tabs/tabs.html',
		transclude: true,
		controller: TabsController,
		controllerAs: 'ctrl'
	});

function TabsController(){
	let ctrl = this;

	ctrl.tabs = [];

	ctrl.select = function(tab) {
		angular.forEach(ctrl.tabs, (elem) => elem.selected = false);
		tab.selected = true;
	}

	ctrl.addTab = function(tab) {
		ctrl.tabs.push(tab);
	}
}