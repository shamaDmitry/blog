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
        vm.postText = '';
        vm.addComment = addComment;


        getCurrentPost();
        function getCurrentPost() {
            vm.postData = PostsService.get('id', {id: postId});
        }

        getComments()
        function getComments() {
            vm.commentData = PostsService.getComments({id: postId});
        }

        function addComment(comment) {
            if(!vm.postText) return;

            PostsService.save({
                body: comment,
                title: 'lol',
                userId: postId
            }, function() {
                getComments();
            });

            vm.postText = '';
        }
    }

})();