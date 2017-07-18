var app = angular.module('intor', ['ui.router', 'ui.swiper']);
	
	app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$urlRouterProvider.otherwise("posts");

		$stateProvider
			.state('/',{
				url: "/",
				templateUrl: "views/home.html",
				title:"Home",
				controller: "homeController"
			})
			.state('posts', {
				url: "/posts",
				templateUrl: "views/posts.html",
				title:"Posts"
			})
		$locationProvider.html5Mode(true);
	});
