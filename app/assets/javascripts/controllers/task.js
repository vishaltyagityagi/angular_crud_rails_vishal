
app.controller('TaskCtrl', ['$scope','$http',function($scope, $http){
		$http.get('/task').then(function(responce){
			$scope.tasks = responce.data;
		});
			$http.get('/task_list').then(function(responce){
			$scope.task = responce.data;
		});
		$scope.delete = function(id, index){
			$http.delete('/delete_task/'+ id).then(function(responce){
				$scope.tasks.splice(index, 1)
		})};

	}]);