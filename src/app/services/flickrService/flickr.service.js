(function () {
    'use strict';

    angular
        .module('blog')
        .factory('Flickr', Flickr);

    Flickr.$inject = ['$resource'];

    function Flickr($resource) {
        return $resource('https://api.flickr.com/services/rest/', {
            api_key: 'ada38f3fcdddee13db7aba5274545864',
            format: 'json',
            nojsoncallback: 1
        }, {
            getPhotoByTags: {
                params: {
                    method: 'flickr.photos.search',
                    tags: '@tag',
                    content_type: 1,
                    safe_search: 1,
                    per_page: 20,
                    page: 10
                }
            },
            getRecentPhotos: {
                params: {
                    method: 'flickr.photos.getRecent',
                    per_page: 30
                }
            }
        })
    }

})();