angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/Survey',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.survey', {
    url: '/survey',
    views: {
      'tab1': {
        templateUrl: 'templates/survey.html',
        controller: 'surveyCtrl'
      }
    }
  })

  .state('tabsController.results', {
    url: '/results',
    views: {
      'tab2': {
        templateUrl: 'templates/results.html',
        controller: 'resultsCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/search',
    views: {
      'tab3': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/Survey/survey')


});