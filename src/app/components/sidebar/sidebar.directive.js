(function () {
    'use strict';

    angular
        .module('blog')
        .directive('sidebar', sidebar);

    function sidebar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'templates/components/sidebar/sidebar.html',
            scope: {},
            controller: SidebarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;


        function SidebarController() {
            var vm = this;
        }
    }

})();