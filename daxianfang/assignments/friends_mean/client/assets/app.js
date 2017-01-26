var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/all.html',
			controller: 'friendsController',
			controllerAs: 'friendsCtrl'
		})
		.when('/new', {
			templateUrl: 'partials/new.html',
			controller: 'friendsController',
			controllerAs: 'friendsCtrl'
		})
		.when('/show/:id', {
			templateUrl: 'partials/show.html',
			controller: 'friendsController',
			controllerAs: 'friendsCtrl'
		})
		.when('/edit/:id', {
			templateUrl: 'partials/edit.html',
			controller: 'friendsController',
			controllerAs: 'friendsCtrl'
		})
		.when('/delete/:id', {
			templateUrl: 'partials/all.html',
			controller: 'friendsController',
			controllerAs: 'friendsCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
})