(function () {
    'use strict';

    angular
        .module('blog')
        .directive('scrollLoad', scrollLoad);

        function scrollLoad() {
            var directive = {
                restrict: 'A',
                link: function (scope, elem, attrs) {

                }
            };

            return directive;
        }
})();
