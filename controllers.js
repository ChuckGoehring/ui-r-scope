'use strict';

angular.module('uirscope')
   .controller('ctrlHome', function ($scope) {
/*
      var base = this;
      console.log('ctrlHome');

      _.assign(base, {
         sayHello: sayHello
      });

      init();

      function init() {

         base.data = {"name": "dank"};
      }

      function sayHello(msg) {
         console.log('hello ' + base.data.name + ', ' + msg);
      }
*/

   })
   .controller('ctrlLeft', function ($scope, Base) {
      var vm = this;
      $scope.base = Base;

      vm.data = {msg: 'left msg'};
      console.log('ctrlLeft');

   })
   .controller('ctrlRight', function ($scope, Base) {
      var vm = this;
      $scope.base = Base;

      vm.data = {msg: 'right msg'};
      console.log('ctrlRight');

   })

