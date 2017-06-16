(function () {
    'use strict';

    angular
        .module('blog')
        .directive('scrollLoad', scrollLoad);

        function scrollLoad() {

            var directive = {
                restrict: 'E',
                transclude: true,
                templateUrl: '/templates/directives/scroll-load.html',
                scope: {
                    name: '='
                }
            };

            return directive;
        }
})();