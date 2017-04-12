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
        vm.size = 0;
        vm.temp = [];

        vm.getMorePosts = getMorePosts;
        vm.checkPostSize = checkPostSize;

        getPosts();
        function getPosts() {
            vm.posts =  PostsService.query({
                _start: vm.size,
                _limit: 1
            });
        }

        function getMorePosts() {
            PostsService.query({
                _start: checkPostSize(),
               _limit: 2
            }).$promise.then(function(data) {
                vm.posts = _.concat(vm.posts, data);
            });
        }

        function checkPostSize() {
            return vm.posts.length;
        }
    }

})();