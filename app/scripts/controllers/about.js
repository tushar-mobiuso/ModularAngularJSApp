'use strict';

/**
 * @ngdoc function
 * @name modularAngularJsappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the modularAngularJsappApp
 */
angular.module('modularAngularJsappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
