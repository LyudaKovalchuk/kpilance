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

		//authentication
		$httpBackend.whenGET('/user/' + qwerty.user.username).respond(qwerty);
		$httpBackend.whenGET('/userContext' + qwerty.user.username).respond(qwerty);
		$httpBackend.whenPOST('/auth', qwertyCredentials).respond(qwerty);
		$httpBackend.whenDELETE('/logout').respond(200);

		//regist
		$httpBackend.whenPOST('/registr', qwertyNew).respond(qwerty);

		function Task() {
			return {
				title: "Web site on angular",
				description: "Web site on angular blablabla, create, $httpBackend.whenGET, $httpBackend.whenPOST, qwertyCredentials",
				subject: "math",
				price: 99
			};	
		}

		let first = {
			tasks: []
		};
		for(let i = 0; i < 8; i++){
			first.tasks.push(new Task());
		}

		//Tasks
		for(let i = 0; i < 10; i++){
			$httpBackend.whenGET('/task?from=' + i*8 + '&quantity=8&subject=math&orderBy=price').respond(200, first);
			$httpBackend.whenGET('/task?from=' + i*8 + '&quantity=8').respond(200, first);
		}

		$httpBackend.whenGET(/.html/).passThrough();
	});