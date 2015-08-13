angular.module('mainAppModule', ['loginModule'])
    .controller("InitController", function($scope, $http) {
        var refresh = function() {
            $http.get('/itemList').success(function(response){
                $scope.itemList = response;
                $scope.item = {
                    name:"", price:"0", qty:"0"
                };
            });
        };
        refresh();

        $scope.addItem = function(){
            $http.post('/itemList', $scope.item).success(function(response){
                refresh();
            });
        };
        $scope.deleteItem = function(id){
            $http.delete('/itemList/'+id).success(function(response){
                refresh();
            });
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
            $scope.item = {
                name:"", price:"0", qty:"0"
            };
        };
    })
    .controller("InitController2", function($scope, $http) {

    });

angular.module('loginModule', [])
    .controller("loginController", function($scope, $http) {
        $scope.login='123456789';
    });