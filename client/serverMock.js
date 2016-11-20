'use strict';

angular.module('kpilance.backend', ['ngMockE2E'])
	.run(function($httpBackend) {

		let qwertyCredentials = {
			username: 'qwerty',
			password: 'qwerty'
		};

		let qwerty = {
			user: {
				username: 'qwerty'
			}
		};

		$httpBackend.whenPOST('/auth', qwertyCredentials).respond(qwerty);
		$httpBackend.whenDELETE('/logout', 'qwerty').respond(qwerty);

		$httpBackend.whenGET(/.html/).passThrough();
	});