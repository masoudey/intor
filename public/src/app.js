var app = angular.module('intor', ['ui.router', 'ui.swiper', 'ngResource', 'ngMessages']);
	
	app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		// $urlRouterProvider.otherwise("posts");

		$stateProvider
			.state('/',{
				url: "/",
				templateUrl: "views/home.html",
				title:"Home",
				controller: "homeController"
			})
			.state('postDetail', {
				url: "/post/:postId",
				templateUrl: "views/post.html",
				controller: "SinglePostController"
			})
			.state('posts', {
				url: "/posts",
				templateUrl: "views/posts.html",
				title:"Posts",
				controller: "PostController"
			})
			.state('newPost', {
				url: '/newPost',
				templateUrl: 'views/new-post.html',
				controller: 'NewPostController'
			})
			
		$locationProvider.html5Mode(true);
	});
	// app.config(['$qProvider', function ($qProvider) {
 //    	$qProvider.errorOnUnhandledRejections(false);
	// }]);
