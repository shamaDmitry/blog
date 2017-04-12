(function () {
    'use strict';

    angular
        .module('blog')
        .component('myFooter', {
            templateUrl: 'templates/components/footer/footer.html',
            controller: FooterController,
            controllerAs: 'vm'
        });

        function FooterController() {
            var vm = this;
        }

})();