'use strict';

angular.module('kpilance')
	.component('account', {
		templateUrl: 'app/components/account/account.html',
		controller: accountCtrl,
		controllerAs: 'ctrl'
	});
	
function accountCtrl() {
	let ctrl = this;

	ctrl.name = "misha";
	ctrl.surname = "bielan";
	ctrl.photoUrl = "http://ic.pics.livejournal.com/kowalski_75/62982442/54183/54183_original.jpg";
}