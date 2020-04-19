// Define the `PhoneListController` controller on the `phonecatApp` module

angular.module('phoneList').
component('phoneList',{
templateUrl: 'phone-list/phone-list.template.html',
controller
});
 
function controller($http) {
  var self=this;
  self.orderProp='age';

  self.onChange = function(val){
    console.log("changed: "+ val);
  };

  $http.get('phones/phones.json').then(function(response) {
    self.phones = response.data;
  });
}