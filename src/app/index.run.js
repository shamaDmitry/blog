(function () {
   'use strict';

   angular
       .module('blog')
       .run(runBlock);

   runBlock.$inject = ['$log'];

   function runBlock($log) {
       $log.log('runBlock end');
   }

})();