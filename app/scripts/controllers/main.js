'use strict';

/**
 * @ngdoc function
 * @name modularAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modularAngularJsApp
 */
angular.module('modularAngularJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
