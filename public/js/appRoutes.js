angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})

        .when('/NewAlbum_Upload', {
            templateUrl: 'views/NewAlbum_Upload.html',
            controller: 'NewAlbum_UploadController'
        })

        .when('/NewAlbum_Choose', {
            templateUrl: 'views/NewAlbum_Choose.html',
            controller: 'NewAlbum_ChooseController'
        });

	$locationProvider.html5Mode(true);

}]);