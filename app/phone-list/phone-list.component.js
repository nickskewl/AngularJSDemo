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

  $http.get('phones/phones.json')
  .then(function mySuccess(response) {
    console.log(response.statusText);
    self.phones = response.data;
  },
  function myError(response) {
    console.log(response);
  });
}