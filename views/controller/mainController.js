angular.module('mainAppModule', ['loginModule'])
    .controller("InitController", function($scope, $http) {
        var refresh = function() {
            $http.get('/itemList').success(function(response){
                $scope.itemList = response;
                refreshInput();
            });
        };
        refresh();
        var refreshInput = function() {
            $scope.item = {
                name:"", price:"0", qty:"0"
            };
        };
        $scope.addItem = function(){
            $http.post('/itemList', $scope.item).success(function(response){
                refresh();
            });
        };
        $scope.deleteItem = function(id, name){
            if (confirm('Are you sure you want to delete '+name+'?')) {
                $http.delete('/itemList/'+id).success(function(response){
                    refresh();
                });
            }
        };
        $scope.selectItem = function(id){
            $http.get('/itemList/'+id).success(function(response){
                $scope.item = response;
            })
        };
        $scope.updateItem = function(){
            $http.put('/itemList/'+$scope.item._id, $scope.item).success(function(response){
                refresh();
            })
        };
        $scope.clearItem = function(){
            refreshInput();
        };
    })
    .controller("InitController2", function($scope, $http) {

    })
    .directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

angular.module('loginModule', [])
    .controller("loginController", function($scope, $http) {
        $scope.login='loginModule';
    });