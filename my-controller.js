
angular.module('uirscope')
   .controller('myController', function ($scope, view) {
      console.log('myController', view);
      var vm = this;


      vm.data = {"name": ""};

      vm.sayHello = function (name) {
         console.log(view, 'hello:', name);
      }

   });
