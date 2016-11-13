angular.module('kpilance', [])
	.component('account', {
		templateUrl: 'app/account.html',
		controller: accountCtrl,
		controllerAs: 'ctrl'
	})
	.component('signUp', {
		templateUrl: 'app/signup.html',
		controller: signUpCtrl,
		controllerAs: 'ctrl'
	})
	.component('signIn', {
		templateUrl: 'app/signin.html',
		controller: signInCtrl,
		controllerAs: 'ctrl'
	});

function accountCtrl() {
	let ctrl = this;

	ctrl.name = "misha";
	ctrl.surname = "bielan";
	ctrl.photoUrl = "http://ic.pics.livejournal.com/kowalski_75/62982442/54183/54183_original.jpg";
}

function signUpCtrl() {
	let ctrl = this;
	
}

function signInCtrl() {
	let ctrl = this;
	
}