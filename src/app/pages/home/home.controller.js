(function () {
    'use strict';

    angular
        .module('blog')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'PostsService']

    function HomeController($log, PostsService) {
        var vm = this;

        vm.pageTitle = 'List of posts';
        vm.posts = [];

        getPosts()
        function getPosts() {
            vm.posts = PostsService.query();
        }
    }

})();