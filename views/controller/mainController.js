angular
    .module('mainAppModule', ['loginModule', 'utileModule.directives'])
    .controller("InitController", InitController)
    .controller("InitController2", InitController2);

angular
    .module('loginModule', [])
    .controller("LoginController", function($scope) {
        $scope.login='loginModule';
    });

InitController.$inject = ['$scope', '$http'];
function InitController($scope, $http) {
    var refresh = function() {
        $http.get('/itemList').success(function(response){
            $scope.itemList = response;
            refreshInput();
        });
    };
    refresh();
    var refreshInput = function() {
        $scope.item = {
            name:"", price:0, qty:0
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
    }
}

InitController2.$inject = ['$scope'];
function InitController2($scope) {

}

