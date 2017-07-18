app.controller('homeController', function($scope, $timeout){
	$scope.Slides = [];
	$scope.pageLoaded =false;
	$timeout(function () {
    $scope.slides = ['Slide1', 'Slide2', 'Slide3', 'Slide4'];
  }, 1000);

	
});
app.controller('mainController', function($scope, $timeout){
	$scope.$on('$viewContentLoaded', function(event) {
      $timeout(function() {
         $scope.pageLoaded = true;
      },0);
    });

   
});