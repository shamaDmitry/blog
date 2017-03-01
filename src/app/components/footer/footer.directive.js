(function () {
    'use strict';

    angular
        .module('blog')
        .directive('myFooter', myFooter);

    function myFooter() {
        var directive = {
            restrict: 'E',
            templateUrl: 'templates/components/footer/footer.html',
            scope: {},
            controller: FooterController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function FooterController() {
            var vm = this;
        }
    }

})();