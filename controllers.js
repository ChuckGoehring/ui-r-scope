
angular.module('uirscope')
   .controller('ctrlLeft', function ($scope, Base) {
      var vm = this;
      vm.data = {msg: 'left msg'};
      console.log('ctrlLeft');

   })
   .controller('ctrlRight', function ($scope, Base) {
      var vm = this;
      vm.data = {msg: 'right msg'};
      console.log('ctrlRight');

   })

