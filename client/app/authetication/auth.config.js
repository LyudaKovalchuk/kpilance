export default function AuthConfig($stateProvider) {
	'ngInject';

	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'app/components/signin/signin.html'
			controller: 'AuthCtrl',
			controllerAs: 'ctrl',
			title: 'Sign In'
		});
}