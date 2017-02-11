

angular.module('uirscope')
   .factory('Base', function($rootScope) {

      console.log('base init');

      var base = $rootScope.base = {
         sayHello: sayHello
      };
      init();
      return base;


      function init() {

         base.data = {"name": "dank"};

         // turns out this isn't needed, the base object watch. I guess there's already a watch on it?
         // I suppose when you change a value in a child scope, it knows which scope it actually belongs
         // to and does a digest on that scope.
/*
         $rootScope.$watchCollection(base, function(newVal) {
            if (newVal) {
               // $rootScope.$digest(); // was crashing on this, so had to do safeApply()
               safeApply();
            }
         })
*/
      }

      function sayHello(msg) {
         console.log('hello ' + base.data.name + ', ' + msg);
      }

      function safeApply(fn) {
         var phase = $rootScope.$$phase;
         if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
               fn();
            }
         } else {
            /*jshint validthis:true */
            this.$apply(fn);
         }
      }

   })
