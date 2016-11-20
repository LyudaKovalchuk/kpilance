'use strict';

angular.module('kpilance.backend', ['ngMockE2E'])
	.run(function($httpBackend) {

		let qwertyCredentials = {
			username: 'qwerty',
			password: 'qwerty'
		};

		let qwerty = {
			username: 'qwerty'
		};

		$httpBackend.whenPOST('/auth', qwertyCredentials).respond({username: 'qwerty'});
		$httpBackend.whenDELETE('/logout', 'qwerty').respond({username: 'qwerty'});

		$httpBackend.whenGET(/.html/).passThrough();
	});