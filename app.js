//, 'oitozero.ngSweetAlert', SweetAlert
angular.module('uirscope', ['ui.router'])
   .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
         .state('home', {
            url: '/',
            views: {
               "left@": {
                  templateUrl: 'left.html',
                  controller: 'ctrlLeft',
                  controllerAs: 'vm'
               },
               'right@': {
                  templateUrl: 'right.html',
                  controller: 'ctrlRight',
                  controllerAs: 'vm'
               }
            }
         });
      $urlRouterProvider.otherwise('/');

   })
   .run(function ($rootScope) {

      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
         console.log('state change', toState.name);
      });

      setTimeout(function() {
         $rootScope.stuff = 'lala';
      }, 1000)

   })






