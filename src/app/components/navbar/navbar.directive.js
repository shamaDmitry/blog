(function () {
    'use strict';

    angular
        .module('blog')
        .directive('navbar', navbar);

    function navbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'templates/components/navbar/navbar.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;


        function NavbarController() {
            var vm = this;

        }
    }

})();