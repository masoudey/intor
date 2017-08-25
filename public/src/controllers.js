app.controller('homeController', function($scope, $timeout){
	$scope.Slides = [];
	$scope.pageLoaded =false;
	$timeout(function () {
    $scope.slides = ['Slide1', 'Slide2', 'Slide3', 'Slide4'];
  }, 1000);

	
});
app.controller('MainController', function($scope, $timeout){
	$scope.$on('$viewContentLoaded', function(event) {
      $timeout(function() {
         $scope.pageLoaded = true;
      },0);
    });
	$scope.expandSearch = false;
});
app.controller('PostController', function($scope, Provider, $location){
    Provider.query().$promise
	.then(function(result){
		// console.log(result);
		$scope.posts = result;
		$scope.ppp = $scope.posts[0]['title'];
	}).catch(function(error) {
      console.log(error);
    });

    // Provider.list().$promise
    // .then(function(data){
    // 	console.log(data);
    // })
	$scope.fields = ['id', 'tittle','desc','img'];

	// $scope.query = "";

	$scope.sort = function(field){
		$scope.sort.field = field;
		$scope.sort.order = !$scope.sort.order;
	};

	$scope.sort.field = 'title';
	$scope.sort.order = false;

	$scope.show = function(id){
		$location.url('/' + id);
	};
});

app.controller('NewPostController', function($scope, Provider, $state){
	$scope.date = new Date();
	$scope.post = new Provider({
		title:   ['','text'],
		desc:    ['', 'text'],
		content: ['', 'text'],
		cotagory:['', 'text'],
		img:     ['', 'file'],
		date:    [$scope.date, 'date']
	});


	$scope.save = function(){
		if ($scope.newPostForm.$invalid){
			$scope.$broadcast('record:invalid');
		} else {
			$scope.post.$save();
			$state.go('posts');
		}
	}
});

app.controller('SinglePostController', function($scope, Provider, $state, $stateParams){
	// $scope.post = Provider.get({ id: parseInt($stateParams.id, 10)});
	Provider.get({ 'id': parseInt($stateParams.postId, 10)}).$promise
	.then(function(result){
		console.log(result);
		$scope.post = result;
	}).catch(function(error) {
      console.log(error);
    });

});