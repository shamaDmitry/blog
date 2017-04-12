(function () {
    'use strict';

    angular
        .module('blog')
        .component('navbar', {
            templateUrl: 'templates/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm'
        });

        function NavbarController() {
            var vm = this;
        }
})();