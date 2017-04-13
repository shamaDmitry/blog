(function () {
    'use strict';

    angular
        .module('blog')
        .directive('scrollLoad', scrollLoad);

        function scrollLoad() {
            var directive = {
                restrict: 'A',
                link: function (scope, elem, attrs) {
                    console.log('scope', scope);
                    console.log('elem', elem);
                    console.log('attrs', attrs);
                }
            };

            return directive;
        }
})();
