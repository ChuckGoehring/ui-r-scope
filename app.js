//, 'oitozero.ngSweetAlert', SweetAlert
angular.module('uirscope', ['ui.router'])
   .config(function ($stateProvider, $urlRouterProvider) {

   $stateProvider
      .state('home', {
         url: '/',
         templateUrl: 'home2.html',
         views: {
            "main@": {
               templateUrl: 'template2.html',
               controller: 'myController',
               controllerAs: 'vm',
               resolve: {
                  view: function () {
                     return 'main';
                  }
               }
            },
            "left@": {
               templateUrl: 'template1.html',
               controller: 'myController',
               controllerAs: 'vm',
               resolve: {
                  view: function () {
                     return 'left';
                  }
               }
            },
            'right@': {
               templateUrl: 'template1.html',
               controller: 'myController',
               controllerAs: 'vm',
               resolve: {
                  view: function () {
                     return 'right';
                  }
               }
            },
         }
      });
   $urlRouterProvider.otherwise('/');

})
   .run(function ($rootScope) {

      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
         console.log('state change', toState.name);
      });

   })






