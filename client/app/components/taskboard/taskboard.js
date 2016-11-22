'use strict';

angular.module('kpilance.taskboard', ['infinite-scroll'])
	.component('taskboard', {
		templateUrl: 'app/components/taskboard/taskboard.html',
		controller: boardCtrl,
		controllerAs: 'ctrl'
	});


function boardCtrl(TaskService) {
	let ctrl = this;

	ctrl.tasks = [];
	let loadCount = 8;
	ctrl.loadMore = () => {
		let last = ctrl.tasks.length;
		TaskService
			.getTasks(last, loadCount, ctrl.subject, ctrl.orderBy)
				.then((response) => {
					ctrl.tasks = ctrl.tasks.concat(response.data.tasks);
				})
				.catch((response) => {
					ctrl.allContent = true;
				})

	};

	ctrl.update = () => {
		ctrl.allContent = false;
		ctrl.tasks = [];
		ctrl.loadMore();		
	};

}