angular.module('mainApp', [])
    .controller("InitController", function($scope, $http) {
        $scope.orderByName='name';

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
            console.log('updateItem : '+$scope.item._id);
            console.log('updateItem : '+$scope.item);
            $http.put('/itemList/'+$scope.item._id, $scope.item).success(function(response){
                refresh();
            })
        };
        $scope.clearItem = function(){
            $scope.item = {
                name:"", price:"0", qty:"0"
            };
        };

});
