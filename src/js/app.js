// sample angular code

var app = angular.module('gDates', ['ngRoute']);

app.directive('myDirective', function () {
  return {
    restrict: 'E',
    templateUrl: '../templates/main.html',
    transclude: true
  };
});