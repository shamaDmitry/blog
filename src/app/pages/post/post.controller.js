(function () {
    'use strict';

    angular
        .module('blog')
        .controller('PostController', PostController);

    PostController.$inject = ['$stateParams', 'PostsService'];

    function PostController($stateParams, PostsService) {
        var vm = this;
        var postId = $stateParams.id;

        vm.postTitle = postId;
        vm.postData = [];
        vm.commentData = [];

        getCurrentPost();
        function getCurrentPost() {
            vm.postData = PostsService.get('id', {id: postId});
        }

        getComments()
        function getComments() {
            vm.commentData = PostsService.getComments({id: postId});
        }
    }

})();