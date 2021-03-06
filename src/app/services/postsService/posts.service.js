(function () {
    'use strict';

    angular
        .module('blog')
        .factory('PostsService', PostsService);

    PostsService.$inject = ['$resource'];

    function PostsService($resource) {
        var PostsService = $resource('https://jsonplaceholder.typicode.com/posts/:id/:comments/',
            {
                id: '@id',
                _start: '@start',
                _limit: '@limit'
            },
            {
                getComments: {
                    params: {
                        comments: 'comments'
                    },
                    method: 'GET',
                    isArray: true
                }
            });

        return PostsService;
    }

})();