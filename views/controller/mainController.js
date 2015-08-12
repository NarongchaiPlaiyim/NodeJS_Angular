angular.module('mainApp', [])
    .controller("InitController", function($scope, $http) {
        var refresh = function() {
            console.log('refresh');
            $http.get('/itemList').success(function(response){
                $scope.itemList = response;
                $scope.item = "";
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
            console.log('updateItem : ');
            $http.get('/itemList/'+$scope.item._id, $scope.item).success(function(response){
                refresh();
            })
        };
});
