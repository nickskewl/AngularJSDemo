angular.
  module('phoneDetail').
  component('phoneDetail', {
    template: 'Detail view for <span>{{$ctrl.phone}}</span>',
    controller
  });

  function controller($routeParams, $http) {
    var self = this;

        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
          self.phone = response.data;
        });
  }