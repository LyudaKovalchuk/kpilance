'use strict';

angular.module('kpilance.backend', ['ngMockE2E'])
	.run(function($httpBackend) {

		let qwertyCredentials = {
			username: 'qwerty',
			password: 'qwerty'
		};

		let qwerty = {
			user: {
				username: 'qwerty',
				email: 'qwerty@gmail.com',
				account: {
					amount: 99.99,
					bankCard: '4149 4978 2793 2031',
				},
				photoUrl: "https://pp.vk.me/c627321/v627321190/1f046/Yzd4lK_Alfk.jpg",
				rating: 12
			}
		};

		let qwertyNew = {
			username: 'qwerty',
			password: 'qwerty',
			posswordConfirm: 'qwerty',
			email: 'qwerty@gmail.com'
		};

		$httpBackend.whenGET('/user/' + qwerty.user.username).respond(qwerty);
		$httpBackend.whenGET('/userContext' + qwerty.user.username).respond(qwerty);
		$httpBackend.whenPOST('/auth', qwertyCredentials).respond(qwerty);
		$httpBackend.whenDELETE('/logout').respond(200);

		$httpBackend.whenPOST('/registr', qwertyNew).respond(qwerty);

		$httpBackend.whenGET(/.html/).passThrough();
	});