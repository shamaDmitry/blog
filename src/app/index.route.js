(function () {
    'use strict';

    angular
        .module('blog')
        .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        var templates = 'templates/'

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: templates + 'pages/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('post', {
                url: '/post/:id',
                templateUrl: templates + 'pages/post/post.html',
                controller: 'PostController',
                controllerAs: 'post'
            })
            .state('about', {
                url: '/about',
                templateUrl: templates + 'pages/about/about.html',
                controller: 'AboutController',
                controllerAs: 'about'
            });

        $urlRouterProvider.otherwise('/');
    }

})();