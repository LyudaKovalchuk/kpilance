'use strict';

angular.module('kpilance')
	.component('tab', {
		templateUrl: 'app/components/tabs/tab.html',
		transclude: true,
		require: {
			tabsCtrl: '^tabs'
		},
		controller: TabController,
		controllerAs: 'ctrl',
		bindings: {
			title: '@'
		}
	});

function TabController(){
	let ctrl = this;

	let init = () => {
		ctrl.$onInit = () => {
			ctrl.tabsCtrl.addTab(this);
		};
	}

	init();
}