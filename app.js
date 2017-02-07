
		
	//, 'oitozero.ngSweetAlert', SweetAlert
	angular.module('uirscope', ['ui.router'])
	.controller('myController', function($scope) {
		var vm = this;
		
		var data = { "name" : ""};
		
		vm.sayHello = sayHello;
	
        function sayHello(message)
        {
            console.log('name: ' + vm.data.name + ' ' + message);
        }	
		
	}).config(function($stateProvider) {
  
		$stateProvider
		  .state('home',{
	        url: '/',		  
			templateUrl: 'home2.html',
			views: {
			  "" : { 
				templateUrl: 'template2.html',
				controller: 'myController',
				controllerAs: 'vm'	
			  },				
				'@home': { 
				templateUrl: 'home.html' 
				},			
				'left@home': {
				templateUrl: 'template1.html',
				controller: 'myController',
				controllerAs: 'vm'
			  },
			  'right@home': {
				templateUrl: 'template1.html',
				controller: 'myController',
				controllerAs: 'vm'
			  },
			  "left@" : { 
				templateUrl: 'template1.html',
				controller: 'myController',
				controllerAs: 'vm'		  
			  }
			}
		  }  );
		  
	});
 
  


	
	
