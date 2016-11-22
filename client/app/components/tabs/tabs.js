'use strict';

angular.module('kpilance')
	.component('tabs', {
		templateUrl: 'app/components/tabs/tabs.html',
		transclude: true,
		controller: TabsCtrl,
		controllerAs: 'ctrl'
	})
	.component('tab', {
		templateUrl: 'app/components/tabs/tab.html',
		transclude: true,
		require: {
			tabsCtrl: '^tabs'
		},
		controller: TabCtrl,
		controllerAs: 'ctrl',
		bindings: {
			title: '@'
		}
	});

function TabsCtrl() {
	let ctrl = this;

	ctrl.tabs = [];

	ctrl.select = (tab) => {
		angular.forEach(ctrl.tabs, (elem) => elem.selected = false);
		tab.selected = true;
	}

	ctrl.addTab = (tab) => {
		if(ctrl.tabs.length === 0){
			ctrl.select(tab);
		}
		ctrl.tabs.push(tab);
	}
}

function TabCtrl() {
	let ctrl = this;

	let init = () => {
		ctrl.$onInit = () => {
			ctrl.tabsCtrl.addTab(this);
		};
	}

	init();
}